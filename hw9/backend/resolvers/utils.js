// return the found user (can be null)
const makeName = (name1, name2) => {
  return [name1, name2].sort().join('_')
}
const checkUser = (db, name, errFunc) => {
  if (!name) throw new Error('Missing user name for ' + errFunc)
  return db.UserModel.findOne({ name })
}
const checkChatbox = (db, chatboxName, errFunc) => {
  if (!chatboxName) throw new Error('Missing chatBoxname for ' + errFunc)
  return db.ChatboxModel.findOne({ name: chatboxName })
}
const checkMessage = async (db, from, to, message, errFunc) => {
  const checkboxName = makeName(from, to)

  return {
    chatbox: await checkChatbox(db, checkboxName, errFunc),
    sender: await checkUser(db, from, errFunc),
    to: await checkUser(db, to, errFunc),
  }
}
const newMessage = (db, sender, content) => {
  return new db.MessageModel({ sender, content }).save()
}
// make sure calling checkUser beforehand
const newUser = (db, name) => {
  return new db.UserModel({ name }).save()
}
const newChatbox = (db, chatboxName) => {
  return new db.ChatboxModel({ name: chatboxName }).save()
}

// makeName, checkChatBox, checkMessage, newMessage, newChatBox
export {
  makeName,
  checkChatbox,
  checkUser,
  checkMessage,
  newMessage,
  newChatbox,
  newUser,
}
