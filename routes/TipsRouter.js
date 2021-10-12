const router = require('express').Router()
const controller = require('../controllers/PhotoController')

router.get('/:tips_id', controller.GetPhotos)
router.delete('/:tips_id', controller.DeletePhoto)

module.exports = router
