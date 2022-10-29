import React from "react"
import TypeAnimation from 'react-type-animation';

export default function Jeger(){
    
    const ExampleComponent =
          <TypeAnimation
            cursor={true}
            sequence={["ingienør", 1000,
             'nørd', 1000,
            "udvikler", 1000, 
        "noget", 1000]}
            wrapper="h1"
            repeat={Infinity}
          />
          
return(
        <div className="Jeger">
            <h2 className="Myname">Hej, Mit navn er</h2>
            <h1 className="Name">Victor</h1>
            <div className="Jegernørd">
                <h2 className="Jegertekst">jeg er</h2>
                <h1>{ExampleComponent}</h1>
                    
                
            </div>
            
           
        
        </div>
    )
    }