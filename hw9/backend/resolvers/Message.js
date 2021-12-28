const Message = {
  sneder(parent, args, { db }, info) {
    return db.UserModel.findById(parent.sender)
  },
}
