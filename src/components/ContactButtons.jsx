import React from 'react'
import Instagram from "../../public/images/instagram.png"
import twitter from "../../public/images/twitter.png"
import Linkedin from "../../public/images/Linkedin.png"

function ContactButtons(props) {
    return (
        <div className="contactbuttons">
            <button id="instagram" onClick={() => props.onclick("instagram")}><img src={Instagram} alt="" /></button>
            <button id="twitter" onClick={() => props.onclick("twitter")}><img src={twitter} alt="" /></button>
            <button id="linkedin" onClick={() => props.onclick("linkedin")}><img src={Linkedin} alt="" /></button>
        </div>
    )
}

export default ContactButtons
