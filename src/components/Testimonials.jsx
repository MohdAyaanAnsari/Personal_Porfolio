import React from 'react'
import Testimonial_Box from './Testimonial_Box'

function Testimonials() {
  return (
        <section id="Testimonials">
        <div className="flexbox">
            
        <Testimonial_Box Description = "Working with this guy was an incredible experience! He guided me throughout the project with clear explanations and creative ideas. I learned a lot and improved my skills tremendously." AuthorName = "Mohd Arhaan" AuthorProfession = "Java Developer" />
        
        <Testimonial_Box Description = "The attention to detail and passion for quality made the entire process smooth. His support and responsiveness truly set him apart. Highly recommended!" AuthorName = "Huda Pari" AuthorProfession = "React Developer" />

        <Testimonial_Box Description = "An amazing journey from start to finish! The project was completed efficiently with clean code and beautiful design. It inspired me to grow as a developer." AuthorName = "Zayn" AuthorProfession = "MERN Stack Developer" />
            
        </div>
    </section>
  )
}

export default Testimonials
