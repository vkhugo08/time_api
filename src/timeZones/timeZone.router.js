const router = require('express').Router()

const timeZonesServices = require('./timeZones.http')


router.route('/')
  .get(timeZonesServices.getAll)

router.route('/:name(*)')
  .get(timeZonesServices.getByName)
  .put(timeZonesServices.createUserTimes)
  .delete(timeZonesServices.removeUserTime)


module.exports = { router }