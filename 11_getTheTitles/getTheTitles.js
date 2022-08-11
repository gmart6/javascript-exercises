const getTheTitles = function (books) {
    bookList = books;
    // for (let book of books) {
    //     bookList.push(book.title);
    // }
    // return bookList;

    return bookList.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
