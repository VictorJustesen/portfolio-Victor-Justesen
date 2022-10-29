import React from "react"


export default function Skill(props){
    return(
        
    <div >
            
          
                <div className="Skill" >
                    <i class={props.classtext}></i>
            <div>
                <h2 className="Skilltext">{props.text}</h2>
                <h2>{props.level}</h2>
            </div>
            </div>
            
      



    </div>



    )
}