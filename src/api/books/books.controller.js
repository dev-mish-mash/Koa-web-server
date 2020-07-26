const Book = require('models/book');


exports.get = async (ctx) => {
    const { id } = ctx.params;

    let book;

    try {
        book = await Book.findById(id).exec();
    } catch (e) {
        if (e.name === 'CastError') {
            ctx.status = 400;
            return;
        }
        return ctx.throw(500, e);
    }

    if (!book) {
        ctx.status = 404;
        ctx.body = {
            message: 'book not found'
        }
        return;
    }

    ctx.body = book;
}

exports.list = async (ctx) => {
    let books;

    try {
        books = await Book.find().exec();
    } catch (e) {
        return ctx.throw(500, e);
    }

    ctx.body = books;
};

exports.create = async (ctx) => {
    const {
        title,
        authors,
        publishedDate,
        price,
        tags
    } = ctx.request.body;

    const book = new Book({
        title,
        authors,
        publishedDate,
        price,
        tags
    });
    try {
        await Book.find()
            .sort({ _id: -1 })
            .limit(3)
            .exec();
    } catch (e) {
        return ctx.throw(500, e);
    }

    ctx.body = book;
};

exports.delete = async (ctx) => {
    const {id} = ctx.params;

    try {
        await Book.findByIdAndRemove(id).exec();
    } catch(e) {
        if(e.name === 'CastError') {
            ctx.status = 400;
            return;
        }
    }

    ctx.status = 204;
};

exports.replace = (ctx) => {
    ctx.body = 'replaced';
};

exports.update = (ctx) => {
    ctx.body = 'updated';
};