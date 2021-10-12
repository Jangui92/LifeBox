const router = require('express').Router()
const controller = require('../controllers/UserControllers')

router.get('/:user_id', controller.GetUser)
router.post('/', controller.CreateUser)
router.put('/:mood_id', controller.UpdateUserMood)
router.delete('/:user_id', controller.DeleteUser)

module.exports = router
