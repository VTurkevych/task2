import {NavLink} from "react-router-dom";
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className='header-block'>
                <NavLink to='/'>Home book</NavLink>
                <NavLink to='add-book'>Add a book</NavLink>
            </div>
        </div>
    );
}