import UserInterface from "../userInterface/UserInterface";

export default function BookList ({value}){
    return (
        <div>
            {
                value.map((value,index) => <UserInterface key={index} value={value}/>)
            }
        </div>
        );
}