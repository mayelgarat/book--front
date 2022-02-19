// import { userService } from '../services/user.service.js'


const initialState = {
   
    books: [],
    book:null,
    msg: false,
}

export function bookReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
   
        case 'SET_BOOKS':
            newState = { ...state, books: [...action.books] }
            break;
        case 'ADD_BOOK':
            newState = { ...state, books: [action.book, ...state.books] }
            break;
        case 'REMOVE_BOOK':
            newState = { ...state, books: state.books.filter(book => book.ISBN !== action.bookISBN) }
            break;
    
        default:
    }
    return newState;
}
