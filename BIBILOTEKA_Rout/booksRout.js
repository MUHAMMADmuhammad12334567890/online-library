const {Router} = require('express')
const {bookController} = require('../BIBILOTEKA_Controllers/booksController')

const router =  Router()

router.get('/books/clients', bookController.getController)
router.get('/books/clients/genris/:id', bookController.getGenresController)
router.get('/books/clients/:id', bookController.getfindByIdController)
router.post('/books/admin', bookController.postController)
router.patch('/books/clients/:id', bookController.pathController)
router.delete('/books/admin/:id', bookController.deleteController)
router.get('/books/admin', bookController.getController)
router.patch('/books/admin/:id', bookController.pathController)


module.exports = router