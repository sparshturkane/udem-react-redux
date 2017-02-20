import { createStore } from 'redux';
import books from './reducers/reducer_books'
import activeBook from './reducers/reducer_active_book'
import rootReducer from './reducers/index';

const defaultState = {
    books: books,
    activeBook: activeBook
};

const store = createStore(rootReducer, defaultState);

export default store;
