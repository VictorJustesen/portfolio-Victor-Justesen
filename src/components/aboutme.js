import React from "react"

export default function Aboutme(){
    return(
    <div >
        <h1 className="Metitel">Mig, mig, mig, mig, mig</h1>
        <div className="Aboutme">
        <img className="Me" src={require("../img/Me.jpg")} /> 
        <div className="Aboutmetext">
            <h2>Jeg studerer Software teknologi som diplom ingienør på DTU   
            Jeg har stor passion for at lave websider, apps, og andre IT løsninger  
            Lige nu er jeg bedst til web development, men jeg kan lidt af det hele, og jeg lærer hurtigt.
            hvis du scroller ned kan du se nogle af de teknologier jeg bedst kan lide at arbejde med og nogle af de projekter jeg har lavet
            Jeg har arbejdet med meget forskelligt men herunder er et udpluk af dem jeg er bedst til</h2>
            </div>
    </div>
    

</div>
    )
}