import {NavLink} from "react-router-dom";

export default function Header (){
    return (
        <div>
            <NavLink to='/'>Home book</NavLink>
            <br/>
            <NavLink to='add-book'>Add a book</NavLink>
        </div>
    );
}