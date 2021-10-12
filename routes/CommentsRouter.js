const router = require('express').Router()
const controller = require('./../controllers/CommentsControllers')

router.get('/:comments_id', controller.CreateComment)
router.post('/:comments_id', controller.GetAllComments)
router.delete('/:comments_id', controller.DeleteComment)

module.exports = router
