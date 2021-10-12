const router = require('express').Router()
const controller = require('../controllers/PhotoController')

router.get('/:user_id', controller.GetPhotos)
router.post('/:user_id', controller.CreatePhoto)
router.delete('/:photo_id', controller.DeletePhoto)

module.exports = router
