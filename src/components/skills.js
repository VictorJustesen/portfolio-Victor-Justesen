import React from "react"
import Skill from "./skill"
import Work from "./work.js"


export default function Skills(){
    return(
    <div className="Skills">
        <div>
        <div className="Jegkan"> 
            <div style={{fontSize:30}}>Det jeg kan</div>
            <div className="Detjegkan">
            <Skill text="ReactJS" classtext="devicon-react-original colored" />
            <Skill text="Python" classtext="devicon-python-plain colored" />
            <Skill text="HTML5" classtext="devicon-html5-plain colored" />
            <Skill text="CSS" classtext="devicon-css3-plain colored" />
            <Skill text="Git" classtext="devicon-git-plain colored" />
            <Skill text="JavaScript" classtext="devicon-javascript-plain colored" />
             <Skill text="Java" classtext="devicon-java-plain colored" />
             
             <Skill text="Github" classtext="devicon-github-original colored" />
            </div>
            <div style={{fontSize:30}}>Hvad jeg træner</div>
            <div className="Øverpå">
            
            <Skill text="TypeScript" classtext="devicon-typescript-plain colored" />
            <Skill text="ReactNative" classtext="devicon-react-original colored" />
            
            </div>
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

