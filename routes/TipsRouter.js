const router = require('express').Router()
const controller = require('../controllers/TipsControllers')

router.get('/', controller.GetAllTips)
router.delete('/:tips_id', controller.DeleteTip)
router.post('/', controller.CreateTip)
router.put('/:tips_id', controller.UpdateTips)

module.exports = router
