const router = require('express').Router()
const controller = require('./../controllers/CommentsControllers')

router.post('/', controller.CreateComment)
router.get('/', controller.GetAllComments)
router.delete('/:comments_id', controller.DeleteComment)

module.exports = router
