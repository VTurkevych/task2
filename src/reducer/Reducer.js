import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid'

export const BookSlice = createSlice({
    name: 'books',
    initialState: {
        value: [],
        obj:{},
    },

    reducers: {
        addBooks(state, action) {
            const newBooks = {
                id: uuid(),
                titleBook: action.payload.titleBook,
                author: action.payload.author,
                select: action.payload.select,
                ISBN: action.payload.ISBN
            }
            state.value.push(newBooks)
        },
        editBookModal(state, action){
            state.value = action.payload
        },
        objBook(state,action){
            state.obj = action.payload
        },
        deleteBook(state, action){
            return {...state, value : state.value.filter(value=> value.id !== action.payload)}
        }


    }
});

export const {addBooks,editBookModal,objBook,deleteBook} = BookSlice.actions;

export default BookSlice.reducer;