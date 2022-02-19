import { connect } from "react-redux";
import React from 'react'
import { loadBooks, removeBook } from "../store/book.action";
import { BookAdd } from "../cmps/BookAdd";
import { BookList } from "../cmps/BookList";
import { BsFillPersonFill } from 'react-icons/bs'

class _BookApp extends React.Component {
  state = {};
  componentDidMount() {
    this.props.loadBooks()
  }

  onRemoveBook = (bookISBN) => {
    this.props.removeBook(bookISBN)
    this.props.loadBooks()
  }

  render() {
    const { user } = this.props
    
    return (
      <section className="main-container">
        <div className="user-add">
          <BookAdd />
          {user && <h3>Hello {user.username} <BsFillPersonFill style={{ transform: 'translateY(2px)' }} /></h3>}
        </div>
        <section className="book-list">
          <BookList books={this.props.books} onRemoveBook={this.onRemoveBook} />
        </section>
      </section>
    )
  }
}

function mapStateToProps({ bookModule, userModule }) {
  return {
    books: bookModule.books,
    user: userModule.user,
  };
}

const mapDispatchToProps = {
  loadBooks,
  removeBook
};

export const BookApp = connect(mapStateToProps, mapDispatchToProps)(_BookApp);
