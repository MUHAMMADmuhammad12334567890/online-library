const {clientController} = require('../BIBILOTEKA_Controllers/clientsController')

const {Router} = require('express')

const router =  Router()

router.post('/users', clientController.postController)
router.patch('/users/:id', clientController.patchController)
router.patch('/admin/clients/:id', clientController.pathAdminController)
router.patch('/users/return/:id', clientController.returnBookController)
router.patch('/users/admin/:id', clientController.returnAdminBookController)
module.exports =  router