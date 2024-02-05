const bookRoute = require('express').Router();
const BookController = require('../controllers/BookController');

bookRoute.get('/', BookController.getBooks)

bookRoute.get('/reviews', BookController.reviewBooks)

bookRoute.get('/buy', BookController.buyBooks)

bookRoute.get('/transaction', BookController.bookPaymentcompleted)

module.exports = bookRoute

