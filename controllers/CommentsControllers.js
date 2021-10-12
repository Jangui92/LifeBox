const GetAllComments = async (req, res) => {
  try {
    const CreateComment = async (req, res) => {
      try {
        const book = await Comments.create({ ...req.body })
        res.send(book)
      } catch (error) {
        throw error
      }
    }

    const GetAllComments = await Comments.findByPk(req.params.id, {
      include: [{ name: name }, { content: content }, { date: date }]
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}
const DeleteComment = async (req, res) => {
  try {
    await User.destroy({ where: { user_id: req.params.user_id } })
    res.send({
      msg: 'Profile Deleted',
      payload: req.params.user_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}
