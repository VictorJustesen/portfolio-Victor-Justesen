import React from "react"
import Contactme from "./contactme"
export default function Contact(){
    return(
        <div className="contactme">
    <div >
Want to work together? 
  
    </div>
    <div>
        <div>
            feel free to reach out to me on any of these platforms
        </div>
        <div className="contacts">
        <Contactme contactname="facebook" contactnameclass="devicon-facebook-plain"/>
        <Contactme contactname="github" contactnameclass="devicon-github-original"/>
        <Contactme contactname="gmail" contactnameclass="devicon-google-plain"/>
        <Contactme contactname="linkedin" contactnameclass="devicon-linkedin-plain"/>
        </div>
    </div>
</div>
    )
}