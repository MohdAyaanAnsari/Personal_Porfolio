import React from 'react'
import Project_Box from './Project_Box'
import quizapp from '../../public/images/quizapp.png'
import HomeAutomation from '../../public/images/HomeAutomation.png'
import Foodie from '../../public/images/Foodie.png'
import Game from '../../public/images/RockPaperScissor.png'
function Projects() {
    function Quiz() {
        document
            .location
            .href = "https://www.github.com/MohdAyaanAnsari/Quiz-Application/"
    }
    function HomeAutmation() {
        document
            .location
            .href = "https://github.com/MohdAyaanAnsari/Home-Automation-using-ESP8266"
    }


    return (
        <section id="projects">
            <div className="heading">Projects</div>
            <div className="headingdesc">See My awesome done project</div>
            <div className="gridbox">

                <Project_Box image= {quizapp} name = "Quiz Application" desc = "A simple and interactive Quiz Application built using HTML, CSS and JavaScript. This project helps users test their knowledge of frontend technologies in a fun way with real-time feedback." onclick = {Quiz} />

                <Project_Box image= {HomeAutomation} name = "Home Automation Website" desc = "A smart Home Automation System built with ESP8266, Node.js, MySQL, HTML, CSS, and JavaScript. This project allows users to remotely control and monitor home appliances through a responsive web interface" onclick = {HomeAutmation} />
                
                <Project_Box image= {Foodie} name = "A Restaurant Website" desc = "A ui for Restaurant built using HTML, CSS and Javascript." onclick = {Quiz}/>

                <Project_Box image= {Game} name = "Rock Paper Scissor Game" desc = "A simple and interactive Game built using HTML, CSS and JavaScript. This project based on frontend technologies in a fun way with real-time feedback." onclick = {Quiz}/>
            </div>
        </section>
    )
}

export default Projects
