import React from 'react'

function SoftSkill_Box(props) {
    return (
        <div className="skill">
            <div className="Sskillicon"><img src={props.image} alt="" height="90" /></div>
            <div className="Sskill">
                <div className="Stitle">{props.title}</div>
                <div className="Sdesc">{props.description}</div>
            </div>
        </div>
    )
}

export default SoftSkill_Box
