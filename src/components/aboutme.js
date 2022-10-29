import React from "react"

export default function Aboutme(){
    return(
    <div >
        <h1 className="Metitel">Mig, mig, mig, mig, mig</h1>
        <div className="Aboutme">
        <img className="Me" src={require("../img/Me.jpg")} /> 
        <div className="Aboutmetext">
            <h2>Jeg studerer Software teknologi som diplom ingienør på DTU   
            Jeg brænder for at lave websider, apps, og andre virtuelle løsninger 
            Udover at fokusere på mine studier laver jeg websider for andre 
            Jeg stræber efter at gøre dem  bæredygtige, pæne, spændende, og ikke mindst prisvenlige
 
            Jeg er agil og ædrat, kan lave stort eller småt. Jeg sætter ingen krav til kunden, 
                 men sætter høje standerder for mig selv.</h2>
            </div>
    </div>
    

</div>
    )
}