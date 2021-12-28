const Chatbox = {
  messages(parent, args, { db }, info) {
    return Promise.all(
      //wait for all executions done
      parent.messages.map((mId) => db.MessageModel.findById(mId)),
    )
  },
}
