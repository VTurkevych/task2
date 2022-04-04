import {useState} from "react";
import {useDispatch} from "react-redux";
import {addBooks} from "../../reducer/Reducer";
import './CreateBookForm.css'


export default function CreateBookForm() {
    const [titleBook, setTitleBook] = useState('');
    const [author, setAuthor] = useState('');
    const [select, setSelect] = useState('');
    const [ISBN, setISBN] = useState(0);
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(addBooks({titleBook, author, select, ISBN}));
            setTitleBook('')
            setAuthor('')
            setSelect('')
            setISBN(0)
        } catch (e) {
            console.log(e)
        } finally {
        }

    };

    return (
        <div className='input'>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text"
                           placeholder={'title'}
                           value={titleBook}
                           onChange={({target: {value}}) => setTitleBook(value)}
                    />
                    <input type="text"
                           placeholder={'author'}
                           value={author}
                           onChange={({target: {value}}) => setAuthor(value)}
                    />
                    <input type="text"
                           placeholder={'select'}
                           value={select}
                           onChange={({target: {value}}) => setSelect(value)}
                    />
                    <input type="number"
                           placeholder={'ISBN'}
                           value={ISBN}
                           onChange={({target: {value}}) => setISBN(value)}
                    />
                </div>
                <div className='input'>
                    <button disabled={!titleBook || !author || !select || !ISBN}
                            type='submit'
                    >Add book
                    </button>
                </div>

            </form>
        </div>
    );
}