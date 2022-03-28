import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid'

export const BookSlice = createSlice({
    name: 'books',
    initialState: {
        value: [],
    },

    reducers: {
        addBooks(state, action) {
            const newBooks = {
                id: uuid(),
                titleBook: action.payload.titleBook
            }
            state.value.push(newBooks)
        }
    }
});

export const {addBooks} = BookSlice.actions;

export default BookSlice.reducer;