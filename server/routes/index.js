const route = require('express').Router()
const Controller = require('../controller/Controller')

route.get('/guests', Controller.getAllGuests)
route.get('/guest/:id', Controller.getOneGuest)
route.post('/guest/create', Controller.createGuest)
route.get('/guests/current', Controller.getCurrentGuests)

route.post('/checkin', Controller.checkIn)
route.post('/checkout', Controller.checkOut)

module.exports = route