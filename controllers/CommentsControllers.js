const { Comments } = require('../models/comments')

const GetComments = async (req, res) => {
  try {
    const comments = await Comments.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentsId = parseInt(req.params.comments_id)
    await Tips.destroy({ where: { id: commentsId } })
    res.send({
      msg: `Tip ${commentsId} Deleted`
    })
  } catch (error) {
    throw error
  }
}
const CreateComment = async (req, res) => {
  try {
    const tips = await Comments.create({
      content: req.body.content,
      date: req.body.date
    })
    res.send(commentss)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllComments,
  DeleteComment,
  CreateComment
}
