import {
  makeName,
  checkChatbox,
  checkUser,
  checkMessage,
  newMessage,
  newChatbox,
  newUser,
} from './utils'

const Mutation = {
  async createMessage(parent, { from, to, message }, { db, pubsub }, info) {
    const { chatbox, sender } = await checkMessage(
      db,
      from,
      to,
      message,
      'createMessage',
    )
    if (!chatbox) throw new Error('missing cahtbox in message')
    if (!sender) throw new Error('User not found' + from)

    const chatboxName = makeName(from, to)
    const newMsg = await newMessage(db, sender, message)
    console.log('newMessage', newMsg)
    chatbox.messages.push(newMsg)
    await chatbox.save()

    pubsub.publish(`message ${chatboxName}`, {
      message: { mutation: 'CREATED', message: newMsg },
    })

    return newMsg
  },

  async createChatbox(parent, { name1, name2 }, { db }, info) {
    if (!name1 || !name2) throw new Error('missing user for create a chatbox')
    if (!(await checkUser(db, name1, 'createChatBox'))) {
      console.log('User does not exist for CreateChatBox: ' + name1)
      await newUser(db, name1)
    }

    const chatboxName = makeName(name1, name2)
    let chatbox = await checkChatbox(db, chatboxName, 'creat chatbox')
    if (!chatbox) chatbox = await newChatbox(db, chatboxName)

    return chatbox
  },

  async createUser(parent, { username }, { db }, info) {
    const existing = await db.UserModel.findOne({ name: username })
    if (existing) throw new Error('user already exists')
    else return newUser(db, username)
  },
}

export default Mutation
