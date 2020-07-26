const Router = require('koa-router');

const books = new Router();
const booksCtrl = require('./books.controller');

books.get('/', booksCtrl.list);

books.post('/', booksCtrl.create);

books.delete('/', booksCtrl.delete);

books.put('/:id', booksCtrl.replace);

books.patch('/:id', booksCtrl.update);

books.get('/:id', booksCtrl.get);

module.exports = books;