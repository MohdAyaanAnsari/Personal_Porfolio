import React from 'react'

function Service_Box(props) {
    return (
        <div className="service">
            <div className="serviceicon"><img src={props.image} alt="" height="50" /></div>
            <div className="servicename">{props.name}</div>
            <div className="servicedesc">{props.desc}</div>
        </div>
    )
}

export default Service_Box
