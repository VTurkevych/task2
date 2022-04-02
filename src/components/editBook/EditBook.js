import {useEffect, useState} from "react";
import {editBookModal} from "../../reducer/Reducer";
import './EditBook.css'


export default function EditBook({value,obj,active,setActive,dispatch}) {

    const [titleBook, setTitleBook] = useState('');
    const [author, setAuthor] = useState('');
    const [select, setSelect] = useState('');
    const [ISBN, setISBN] = useState(0);


    useEffect(() => {
        setTitleBook(obj.titleBook);
        setAuthor(obj.author);
        setSelect(obj.select);
        setISBN(obj.ISBN);
    }, [obj]);

    function editText() {
        const findEditItemModal = {...value.find(value => value.id === obj.id)}
        findEditItemModal.titleBook = titleBook;
        findEditItemModal.author = author;
        findEditItemModal.select = select;
        findEditItemModal.ISBN = ISBN;
        const editList = [...value.map(value => value.id === findEditItemModal.id ? value = findEditItemModal : value)]
        dispatch(editBookModal(editList))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!titleBook || !author || !select || !ISBN) return;
        try {
            editText()
            setTitleBook('');
            setAuthor('');
            setSelect('');
            setISBN(0);
            dispatch(setActive(false))
        } catch (e) {
            console.log(e)
        } finally {
        }
    };
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => {setActive(false)}}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text"
                               placeholder='title book'
                               value={titleBook}
                               onChange={({target: {value}}) => setTitleBook(value)}
                        />
                        <input type="text"
                               placeholder='author'
                               value={author}
                               onChange={({target: {value}}) => setAuthor(value)}
                        />
                        <input type="text"
                               placeholder='select'
                               value={select}
                               onChange={({target: {value}}) => setSelect(value)}
                        />
                        <input type="text"
                               placeholder='ISBN'
                               value={ISBN}
                               onChange={({target: {value}}) => setISBN(value)}
                        />
                    </div>

                    <div>
                        <button onClick={() => setActive(false)}
                                type='submit'
                                disabled={!titleBook || !author || !select || !ISBN}
                        >edit
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}