import { connect } from "react-redux";
import React from "react";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { loadBooks } from "../store/book.action";
import { bookService } from "../services/book.service.js";

export class _BookAdd extends React.Component {

  state = {
    isModalOpen: false,
    book: {
      title: "",
      description: "",
      price: "",
      genre: "",
      author: "",
      publication_date: "",
      img: ""
    }
  }

  onHandleChange = ({ target }) => {
    const field = target.name;
    
    const value = target.value;
    this.setState((prevState) => ({
      book: { ...prevState.book, [field]: value }}))
  }

  onAddBook = async (ev) => {
    ev.preventDefault();
    const { book } = this.state;

    await bookService.save(book);
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      book: {
        title: "",
        description: "",
        price: "",
        genre: "",
        author: "",
        publication_date: "",
        img: ""
      }
    })
    this.props.loadBooks()
  }

  onChangeDate = (date) => {
    this.setState((prevState) => ({
      book: { ...prevState.book, publication_date: date.value },
    }));
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      book: {
        title: "",
        description: "",
        price: 0,
        genre :"",
        author: "",
        publication_date: "",
        img: ""
      }
    })
  }

  render() {
    const { isModalOpen } = this.state
    return <section className="book-add">
      <button onClick={this.toggleModal}>Add new book +</button>
      {isModalOpen && <form className="book-form" onSubmit={this.onAddBook}>
      <button onClick={this.toggleModal} className="close">X</button>
        <input
          placeholder="Title"
          value={this.state.book.title}
          name="title"
          type="text"
          onChange={this.onHandleChange}
        ></input>
        <input
          placeholder="Description"
          value={this.state.book.description}
          name="description"
          type="text"
          onChange={this.onHandleChange}
        ></input>
        <input
          placeholder="Author"
          value={this.state.book.author}
          name="author"
          type="text"
          onChange={this.onHandleChange}
        ></input>
        <input
          placeholder="price"
          value={this.state.book.price}
          name="price"
          type="number"
          min="0"
          onChange={this.onHandleChange}
        ></input>
        <input
          placeholder="Img URL"
          value={this.state.book.img}
          name="img"
          type="text"
          onChange={this.onHandleChange}
        ></input>
        <input list="genre-list" name="genre" placeholder="Genre" value={this.state.book.genre} onChange={this.onHandleChange} />
        <datalist id="genre-list">
          <option value="Drama"></option>
          <option value="Mystery"></option>
          <option value="Romance"></option>
          <option value="Horror"></option>
        </datalist>
        <div>
          <DatePickerComponent placeholder="Enter Publication Date" onChange={this.onChangeDate} value={this.state.book.publication_date} />
        </div>
        <button type="submit" className="add-book-btn">Add</button>
      </form>}
      
    </section>
  }
}
function mapStateToProps({ bookModule }) {
  return {
    books: bookModule.books,
  };
}

const mapDispatchToProps = {
  loadBooks
};
export const BookAdd = connect(mapStateToProps, mapDispatchToProps)(_BookAdd);

