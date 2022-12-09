import React from "react";
import Todos from "../Components/Todos"

function Schedule(props){
const {todo} = props
const count = todo.length
let displayCount = 0
    if(count > 1){
        displayCount = count + " Tasks left"
    } else if(count === 1){
        displayCount = count + " Task left"
    } else {
        displayCount = " No tasks to complete"
    }

    return (
        <div>
        <h1>Full Schedule:</h1>
        <h2> You Have {displayCount}</h2>
        <Todos todo={todo}/>
        </div>
    )
}

export default Schedule;