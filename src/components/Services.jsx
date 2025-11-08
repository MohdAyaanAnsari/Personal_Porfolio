import React from 'react'
import Service_Box from './Service_Box'
import Frontend from '../../public/images/frontend.png'
import Backend from '../../public/images/backend.png'
import Fullstack from '../../public/images/fullstack.png'
function Services() {
  return (
    <section id="Services">
        <div className="heading">Services</div>
        <div className="headingdesc">We provide the best services</div>
        <div className="flexbox">

            <Service_Box image={Frontend} name="Frontend Development" desc="I build responsive and engaging user interfaces using HTML, CSS, JavaScript, and React.js, focusing on clean design, smooth performance, and great user experience."/>

            <Service_Box image={Backend} name="Backend Development" desc="I create secure and efficient server-side applications using Node.js, Express.js, and MySQL, ensuring fast performance and reliable data handling."/>
            
            <Service_Box image={Fullstack} name="Full Stack Development" desc="I develop complete web solutions using the MERN stack, handling everything from UI design to backend logic and deployment for seamless performance."/>

        </div>
    </section>
  )
}

export default Services
