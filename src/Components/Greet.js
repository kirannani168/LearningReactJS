import React from "react";
function Greet(props){
    return(
        <div>
            <p>Functional Component using props</p>
            <h2>Greetings {props.name} is {props.role}!!</h2>
            {props.children}
        </div>
    )
}

export default Greet