const {Router} = require('express')

const router =  Router()

router.use(require('./booksRout'))
router.use(require('./genresRout'))
router.use(require('./reviewsRout'))
router.use(require('./clientsRout'))

module.exports = router