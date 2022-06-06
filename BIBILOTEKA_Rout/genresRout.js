
const {Router} = require('express')

const {genresContoller} = require('../BIBILOTEKA_Controllers/genresController')

const router =  Router()

router.get('/genres/admin', genresContoller.getController)
router.post('/genres/admin', genresContoller.postController)
router.patch('/genres/admin/:id', genresContoller.patchController)
router.delete('/genres/admin/:id', genresContoller.deleteController)

module.exports = router
