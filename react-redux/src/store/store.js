import { createStore } from 'redux';
import counterReducer from '../reducer/counterReducer';
import { configureStore } from '@reduxjs/toolkit';

// const store = createStore(counterReducer);
const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

export default store;
