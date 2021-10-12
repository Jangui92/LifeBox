const router = require('express').Router()
const controller = require('../controllers/UserController')

router.get('/:user_id', controller)
router.post('/:user_id', controller)
router.put('/:user_id', controller.UpdateUser)
router.delete('/:user_id', controller)

module.exports = router
