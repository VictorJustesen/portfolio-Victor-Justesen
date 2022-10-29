import React from "react"
import Skill from "./skill"
import Work from "./work.js"


export default function Skills(){
    return(
    <div className="Skills">
        <div className="Jegkan"> 
            <div style={{fontSize:30}}>Noget af det jeg kan</div>
            <div className="Detjegkan">
            <Skill text="ReactJS" classtext="devicon-react-original-wordmark colored" level="mellem"/>
            <Skill text="Python" classtext="devicon-python-plain colored" level="mellem"/>
            <Skill text="HTML5" classtext="devicon-html5-plain colored" level="mellem"/>
            <Skill text="CSS" classtext="devicon-css3-plain colored" level="mellem"/>
            <Skill text="Tailwind" classtext="devicon-tailwindcss-original-wordmark colored" level="mellem"/>
            <Skill text="TypeScript" classtext="devicon-typescript-plain colored" level="mellem"/>
            <Skill text="Git" classtext="devicon-git-plain colored" level="mellem"/>
            <Skill text="JavaScript" classtext="devicon-javascript-plain colored" level="mellem"/>
            </div>
        </div>
        <div className="jobsogtekst">    
            <div className="Jobtitel">Noget af det jeg har lavet</div>
            <div className="Jobs">
                <Work jobname="job1" 
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                ... Ipsum available, but the majority have suffered alteration in some form"/>
                <Work jobname="job1" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                ... Ipsum available, but the majority have suffered alteration in some form"/>
                <Work jobname="job1" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                ... Ipsum available, but the majority have suffered alteration in some form"/>
                <Work jobname="job1" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                ... Ipsum available, but the majority have suffered alteration in some form"/>
            
            </div>
        </div>

    </div>



    )
}

