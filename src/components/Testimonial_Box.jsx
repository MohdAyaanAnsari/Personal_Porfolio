import React from 'react'

function Testimonial_Box(props) {
    return (
        <div className="Testimonial">
            <div className="TestimonialContent">{props.Description}</div>
            <div className="Author">
                <div className="quote"><img src="stroke.png" height="70" alt="" /></div>
                <div>
                    <div className="Authorname">{props.AuthorName}</div>
                    <div className="AuthorProfesshion">{props.AuthorProfession}</div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial_Box
