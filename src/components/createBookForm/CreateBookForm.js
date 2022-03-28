import {useState} from "react";
import {useDispatch} from "react-redux";
import {addBooks} from "../../reducer/Slice";

export default function CreateBookForm() {
    let [titleBook, setTitleBook] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            dispatch(addBooks({titleBook}));
            setTitleBook('');
        } catch (e) {
            console.log(e)
        } finally {
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="text"
                       placeholder={'title'}
                       value={titleBook}
                       onChange={(e) => setTitleBook(e.target.value)}
                />
                <button disabled={!titleBook} type='submit'>save</button>
            </div>
        </form>
    );
}