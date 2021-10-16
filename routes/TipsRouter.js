const router = require('express').Router()
const controller = require('../controllers/TipsControllers')

router.get('/:tips_id', controller.GetAllTips)
router.delete('/:tips_id', controller.DeleteTip)
router.post('/', controller.CreateTip)

module.exports = router
