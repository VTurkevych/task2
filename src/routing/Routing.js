import {Route,Routes} from "react-router";
import HomeWindow from "../components/homeWindow/HomeWindow";
import CreateBookForm from "../components/createBookForm/CreateBookForm";
import EditBook from "../components/editBook/EditBook";

export default function Routing (){
    return <div>
        <Routes>
            <Route path='/' element={<HomeWindow/>}/>
            <Route path='/add-book' element={<CreateBookForm/>}/>
            <Route path='/edit-book/:id' element={<EditBook/>}/>
        </Routes>
    </div>
}