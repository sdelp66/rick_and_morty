import React from "react";

export default function Random(props){

    return(
        <button onClick={()=>{props.random()}}>Aleatorio</button>
    )
}