import React from "react"


export default function Contactme(props){
    
    return(
        <div className="stuff">
        <i class={props.contactnameclass} href={props.link}></i>
        <a href={props.link}>{props.contactname}</a>
        </div>
 
    )
}