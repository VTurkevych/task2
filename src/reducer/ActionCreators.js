// import axios from "axios";
// import {useDispatch} from "react-redux";
// import {addBooks, bookFetching} from "./Reducer";
//
// export const fetchBooks = () => async () => {
//     const dispatch = useDispatch();
//     try {
//         const response = await axios.get('http://localhost:3500/books')
//         dispatch(bookFetching(response.data))
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// export const axiosBookEdit = (id, titleBook, author, select, ISBN) => async () => {
//     try {
//         const response = await axios.patch(`http://localhost:3500/books/${id}`, {
//             titleBook: titleBook,
//             author: author,
//             select: select,
//             ISBN: ISBN
//         })
//     } catch (e) {
//         console.log(e)
//     }
// }
//
//
// export const deleteBook = (id) => async () => {
//     try {
//         const response = await axios.post(`http://localhost:3500/books/${id}`)
//     } catch (e) {
//         console.log(e)
//     }
// }
// export const addBook = (titleBook,author,select,ISBN) => async () => {
//     const dispatch = useDispatch();
//
//     try {
//         const response = await axios.post('http://localhost:3500/books',{
//             titleBook:titleBook,
//             author:author,
//             select:select,
//             ISBN:ISBN
//         })
//         const data = await response.data
//         dispatch(addBooks(data))
//     }catch (e){
//         console.log(e)
//     }
// }
