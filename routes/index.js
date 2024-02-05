const route = require('express').Router()
const bookRoutes = require ('./book')
route.use('/books', bookRoutes)

// endpoint 1
route.get('/', (req, res) => {
    res.send('Welcome to BookStore!')
  })
  
  module.exports = route
