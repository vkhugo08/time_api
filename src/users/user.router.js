const router = require('express').Router()

const userServices = require('../users/user.http')

router.route('/')
.get(userServices.getAll)

router.route('/:id')
    .get(userServices.getById)
    .delete(userServices.remove)
    .put(userServices.edit)

router.route('/')

module.exports = {router}
//! falta hcer auth para register y login
//! middleware auth (jwt, passport)