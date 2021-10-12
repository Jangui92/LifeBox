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
    const { Comments } = require('../models')

    const GetAllComments = await Comments.findByPk(req.params.comments_id, {
      include: [{ username: username }, { content: content }, { date: date }]
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}
const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy({ where: { user_id: req.params.comments_id } })
    res.send({
      msg: 'Profile Deleted',
      payload: req.params.comments_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetAllComments,
  DeleteComment
}
