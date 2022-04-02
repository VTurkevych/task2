import BookList from "../bookList/BookList";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import EditBook from "../editBook/EditBook";

export default function HomeWindow (){
    const {value,obj} = useSelector(state => state.booksReducer);
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    return (
        <div>
            <BookList  value={value} setActive={setActive} dispatch={dispatch}/>
            <EditBook value={value} active={active} setActive={setActive} obj={obj} dispatch={dispatch}/>
        </div>
        );
}