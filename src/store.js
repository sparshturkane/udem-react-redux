import { createStore } from 'redux';
import books from './reducers/reducer_books.js'
import rootReducer from './reducers/index';

const defaultState = {
     books: books,
};

const store = createStore(rootReducer, defaultState);

export default store;
