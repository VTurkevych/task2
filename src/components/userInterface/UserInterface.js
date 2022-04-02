import {deleteBook, objBook} from "../../reducer/Reducer";
import './UserInterface.css'

export default function UserInterface({value,setActive,dispatch}) {
    
    return (
        <div className=''>
            <div>
                <h1>Title - {value.titleBook}</h1>
                <h2>Author - {value.author}</h2>
                <h3>Category - {value.select}</h3>
                <h4>ISBN - {value.ISBN}</h4>
            </div>
            <div>
                <button onClick={()=>{
                    dispatch(deleteBook(value.id))
                }}>delete book</button>
            </div>
            <div>
                <button onClick={()=>{
                    dispatch(objBook(value))
                    setActive(true)
                }}>Edit book</button>
            </div>
        </div>
    );
}