const {reviewController} = require('../BIBILOTEKA_Controllers/reviewsController')

const {Router} = require('express')

const router = Router() 

router.get('/reviews/clients', reviewController.getController)
router.post('/reviews/clients', reviewController.postContoller)
router.patch('/reviews/clients/:id', reviewController.patchController)
router.delete('/reviews/clients/:id', reviewController.deleteController)

module.exports = router