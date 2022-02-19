import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineDelete} from 'react-icons/ai'

export function BookPreview({ book, onRemoveBook }) {
  if (!book) return 'no books to show'
  const date = new Date(book.publication_date).getMonth() + "/" + new Date(book.publication_date).getDate() + "/" + new Date(book.publication_date).getFullYear()
  return (
    <div
      className="book-container">
      <div className="book-preview-details">
        <h1>{book.title}</h1>
        <p>{book.price}$</p>
        {/* <p>{date}</p> */}
      <div className='img-container'>
        <img src={book.img}></img>
      </div>
      </div>
      <div className="btn-control-book">
        <Link to={`/details/${book.ISBN}`}>
          <button>More Detailes</button>
        </Link>
        <button className='delete-btn' onClick={() => onRemoveBook(book.ISBN)}><AiOutlineDelete/></button>
      </div>
    </div>
  );
}

