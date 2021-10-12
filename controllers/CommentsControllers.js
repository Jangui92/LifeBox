const { Comments } = require('../models/comments')

const CreateComment = async (req, res) => {
  try {
    const comment = await Comments.create({ ...req.body })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const GetAllComments = async (req, res) => {
  try {
    const comments = await Comments.findByPk(req.params.comments_id, {
      include: [{ username: username }, { content: content }, { date: date }]
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    await Comments.destroy({ where: { user_id: req.params.comments_id } })
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
  CreateComment,
  GetAllComments,
  DeleteComment
}
