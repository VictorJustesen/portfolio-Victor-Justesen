import React from "react"
import Header from "./header.js"

export default function Hjemmeside(){
    
    
    const color = ["green", "red", "blue",]
    
    const [i, seti]=React.useState(color.length-1)

    function change(){
        seti(previ => previ -1)
        if (i === 0) {
            seti(color.length-1)

            
          }
    }
   
    const size= ["0",
     "25%", "40%", "55%", "70%", "85%"]
    const sizetekst=[0, 10, 15, 25, 30, 35]
    const[w, setw]=React.useState(3)
        
    function close(){
        setw(prew => 0)
        

        }

        
    function enlarge(){
        setw(prew => prew+1)
        if (w === size.length-1) {
            setw(size.length-1)
        }
        }

        
    function ensmaller(){
        setw(prew => prew-1)
        

        }

    
    const style1={backgroundColor: color[i]};
    const style2={width: size[w]}
    

    return(
    <div className="Hjemmeside" style={{...style1,...style2}}>
        
       <div className="Miniheader">
        <div className="Red" onClick={close}>x</div>
        <div className="Yellow" onClick={ensmaller}
        >-</div>
        <div className="Green" onClick={enlarge}>+</div>
        <h1 className="Minhjemmeside" style={{fontSize: sizetekst[w]}}>Min seje hjemmeside </h1>
       </div>


       <div onClick={change} className="Colorbutton" style={{fontSize: sizetekst[w]}} >want another color?</div>
    </div>
    
    
    )
    }