import UserInterface from "../userInterface/UserInterface";


export default function BookList({value, setActive, dispatch}) {

    return (

        <div>
            {
                value.map((value, index) => <UserInterface key={index} value={value} setActive={setActive}
                                                           dispatch={dispatch}/>)
            }
        </div>
    );
}