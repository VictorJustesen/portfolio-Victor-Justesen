import React from "react"


export default function Work(props){
    return(
        <div className={props.classname}>
    <div className="Job" >
        <div className="jobname">{props.jobname}</div>
        <div>{props.description}</div>
        <div className="buttons">
            <a className="button" href="">Demo</a>
            <a className="button" href={props.glink}>Github</a>
        </div>
        {props.tags}
        </div>
    </div>



    )
}