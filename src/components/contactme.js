import React from "react"


export default function Contactme(props){
    
    return(
        <div className="stuff">
        <i class={props.contactnameclass}></i>
        <h2>{props.contactname}</h2>
        </div>
 
    )
}