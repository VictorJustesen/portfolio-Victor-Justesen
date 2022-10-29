import React from "react"
import Hjemmeside from "./hjemmeside.js"

export default function Makeownsite(){
    return(
    <div className="Makeownsite">
   <h1>Brug for hjælp med hjemmeside? </h1>
   <h2>Lad mig hjælpe dig!</h2>
   <div>
        <div>
            <h3>jeg studerer software teknologi på DTU,
                og elsker alt med nuller og et taller</h3>
            <h3>Skal vi lave en side sammen?</h3>
            <h3>klik på bagrunden for at skifte farve og klik på billedet for at ændre</h3> 
        </div>
            <Hjemmeside/>
    </div>
</div>


    )
}