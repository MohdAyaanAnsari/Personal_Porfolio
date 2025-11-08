import React from 'react'
import ContactButtons from './ContactButtons'
function Contact() {

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
    <section id="contact">
      <div className="heading">Contact Me</div>
      <div className="headingdesc" style={{ fontWeight: 600 }}>Via</div>
      <div>
        <p>4y4n4ns4ri@gmail.com</p>
        <p>Doctor Line Road, Kashipur, Udham Singh Nagar, Uttarakhand - 244713</p>
      </div>
      <ContactButtons onclick = {contactnav} />
    </section>
  )
}

export default Contact
