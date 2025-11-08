import React from 'react'
import Resume from '../../public/pdf/RESUME_Ayaan.pdf'
import Profile from '../../public/images/profile.jpg'
function sectn() {
  return (
    <section id="intro">
        <div className="leftintro">
            <h2>
                Hi, I'm Ayaan
            </h2>
            <div className="profession" style={{color: '#FFC400'}}>
                Web Developer
            </div>
            <div className="introduction">
                I'm a passionate web developer with a knack for creating stunning and user-friendly websites. With a
                background in design and content creation, I bring a holistic approach to every project I undertake.
            </div>
            <a id="Resume" target="_blank" href={Resume}>View Resume</a>
        </div>
        <div className="rightintro">
            <img src= {Profile}
                alt="" width="510"/>
        </div>
    </section>
  )
}

export default sectn
