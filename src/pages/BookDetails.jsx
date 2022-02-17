import { connect } from "react-redux";
import React from "react";
import { bookService } from "../services/bookService";
// import bookImg from "../assets/img/book3.JPG";
// import {Reviews} from '../cmps/Reviews.jsx'
// import {ChatRoom} from '../cmps/ChatRoom.jsx'
class _BookDetails extends React.Component {
  state = {
    book: null,
  };

  componentDidMount() {
    const { bookISBN } = this.props.match.params;
    bookService.getByISBN(bookISBN).then((book) => {
      this.setState({ book });
    });
  }

  onBack = () => {
    this.props.history.push("/books");
  };

  render() {
    const { book } = this.state;
    if (!book) return "No such book with this ISBN";
    return (
      <section className="book-details">
        <div>
          <h1 className="margin-top">{book.title}</h1>

          <h3>Price: {book.price}$</h3>
          <h3>Author: {book.author}</h3>
          <h3>Genre: {book.genre}</h3>
          <h3>Publication date: {new Date(book.publication_date).getMonth() + "/" + new Date(book.publication_date).getDate() + "/" + new Date(book.publication_date).getFullYear()}</h3>



          <div>
            <p>{book.description}</p>
          </div>
          <div>
            <button onClick={this.onBack}>Back</button>
          </div>
        </div>
          <div className="img-con">
            <img src={book.img}></img>
          </div>

      </section>
    );
  }
}

function mapStateToProps({ bookModule }) {
  return {
    books: bookModule.books,
  };
}

export const BookDetails = connect(mapStateToProps)(_BookDetails);
