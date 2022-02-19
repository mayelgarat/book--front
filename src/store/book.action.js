import {
  bookService
} from "../services/book.service.js";

export function removeBook(bookISBN) {
  return async (dispatch) => {
    try {
      await bookService.remove(bookISBN);
      dispatch({
        type: "REMOVE_BOOK",
        bookISBN: bookISBN
      });
    } catch (err) {
      console.log("Cannot remove book", err);
      dispatch({ type: 'SET_MSG', msg: { txt: 'Login first please' } })
      return err
    }
  };
}

export function loadBooks() {
  return async (dispatch) => {
    try {
      const books = await bookService.query();
      const action = {
        type: "SET_BOOKS",
        books: books
      };
      dispatch(action);
    } catch (err) {
      console.log("cannot find books", err);
      return (err)
    }
  };
}


export function addBook(book) {
  return async (dispatch) => {
    try {
      const savedBook = await bookService.save({
        ...book
      })
      const action = {
        type: "ADD_BOOK",
        book: savedBook
      };
      dispatch(action);
    } catch (err) {
      console.log('Cannot add book', err);
      dispatch({ type: 'SET_MSG', msg: { txt: 'Login first please' } })
   
    }
  };
}