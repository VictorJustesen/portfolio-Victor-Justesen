import React from "react"
import TypeAnimation from 'react-type-animation';

export default function Jeger(){
    
    const ExampleComponent1 =
    <TypeAnimation
      cursor={false}
      sequence={["Hej!", 1000,
       'Mit navn er Victor!', 30000]}
      wrapper="h1"
      repeat={1}
      speed={35}
    />
    const ExampleComponent2 =
    <TypeAnimation
      cursor={false}
      sequence={[4000,
      "Jeg leder efter et job", 3000,]}
      wrapper="h1"
      repeat={1}
      speed={45}
    />

    const ExampleComponent3 =
    <TypeAnimation
      cursor={false}
      sequence={[7000,
      "Mangler du en frontend-dev?", 4000,
      "Mangler du en programmør?", 4000,
      "Mangler du en designer?", 4000,
      "Mangler du en koder?",0]}
      wrapper="h1"
      repeat={Infinity}
      speed={55}
    />
    
   
          
return(
    <div className="Jeger">
            
        
            <div>
            <h1 className="typew1">{ExampleComponent1}</h1>
            </div>

            <div>
            <h1 className="typew2">{ExampleComponent2}</h1>
            </div>
            
            <div>
            <h1 className="typew3">{ExampleComponent3}</h1>
            </div>
            
        </div>
    )
    }