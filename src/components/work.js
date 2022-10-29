import React from "react"


export default function Work(props){
    return(
        
    <div className="Job">
        <div className="jobname">{props.jobname}</div>
        <div>{props.description}</div>
        <div className="buttons">
            <button>Demo</button>
            <button>Github</button>
        </div>
        
    </div>



    )
}