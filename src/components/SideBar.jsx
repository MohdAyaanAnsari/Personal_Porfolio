import React from 'react'
import Nav from './Nav'
import ContactButtons from './ContactButtons'

function SideBar(props) {
    function contactnav(id){
    if(id==="instagram"){
      window.open("https://www.instagram.com/_4y4n")
    } else if(id==="twitter"){
      window.open("https://twitter.com/_4y4n")
    } else if(id==="linkedin"){
      window.open("https://www.linkedin.com/in/mohdayaanansari/")
    }
  }
    return (
        <div class="sidebar" style={{ width: props.width }}>
            <div class="closebutton">
                <button onClick={props.onclick}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                </button>
            </div>
            <Nav/>
            <p>Contact Me</p>
            <ContactButtons onclick = {contactnav}/>
        </div>
    )
}

export default SideBar
