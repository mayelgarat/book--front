import {
  httpService
} from "./http.service";
import Axios from "axios";
var axios = Axios.create({
  withCredentials: true,
});

const STORAGE_KEY = "book";

export const bookService = {
  query,
  getByISBN,
  save,
  remove,
};

async function query() {


    try {
      const books = await httpService.get(`book`);
      return books;
    } catch (err) {
      console.log("err", err);
    }
}

async function getByISBN(bookISBN) {
  try {
    const book = await httpService.get(`book/${bookISBN}`);
    return book;
  } catch (err) {
    console.log(err.response.status);
  }
}

async function remove(bookISBN) {
  try {
    await httpService.delete(`book/${bookISBN}`);
  } catch (err) {
    console.log(err, "err");
    throw new Error(err);
  }

}

async function save(book) {
  if (book.ISBN) {
    try {
      const savedBook = await httpService.put(`book/${book.ISBN}`, book);
      return savedBook;
    } catch (err) {
      console.log(err, "err");
      throw new Error(err);
    }
  } else {
    try {
      const savedBook = await httpService.post("book", book);
      return savedBook;
    } catch (err) {
      console.log(err, "err");
    }
  }
}
