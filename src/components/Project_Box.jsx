import React from 'react'

function Project_Box(props) {
    return (
        <div className="project" onClick={props.onclick}>
            <div className="projecticon"><img src={props.image} alt="" /></div>
            <div className="overflow">
                <div className="projectname">{props.name}</div>
                <div className="projectdesc">{props.desc}</div>
            </div>
        </div>
    )
}

export default Project_Box
