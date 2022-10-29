import React from "react"
import Contactme from "./contactme"
export default function Contact(){
    return(
        <div className="contactme">
    <div style={{fontSize:25, padding:5}} >
Vil du arbejde sammen med mig?
  
    </div>
    <div>
        <div style={{fontSize:25, padding:5}}>
            Skriv til mig her, så snakker vi om det!
        </div>
        <div className="contacts">
        <Contactme contactname="Facebook" contactnameclass="devicon-facebook-plain colored" link="https://www.facebook.com/victor.justesen/"/>
        <Contactme contactname="Github" contactnameclass="devicon-github-original " link="https://github.com/VictorJustesen" />
        <Contactme contactname="Gmail" contactnameclass="devicon-google-plain colored" link="mailto:gingerlord.and.co@egmail.com"/>
        <Contactme contactname="Linkedin" contactnameclass="devicon-linkedin-plain colored" link="https://www.linkedin.com/in/victor-skaarup-justesen-5266281b8/"/>
        </div>
    </div>
</div>
    )
}