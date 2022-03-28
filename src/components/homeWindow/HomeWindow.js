import CreateBookForm from "../createBookForm/CreateBookForm";
import BookList from "../bookList/BookList";
import {useSelector} from "react-redux";

export default function HomeWindow (){
    const {value}= useSelector(state => state.books);
    console.log(value)
    return (
        <div>
            <CreateBookForm/>
            <BookList value={value}/>
        </div>
        );
}