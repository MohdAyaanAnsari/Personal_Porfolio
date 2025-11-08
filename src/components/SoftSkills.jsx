import React from 'react'
import SoftSkillBox from './SoftSkill_Box.jsx'
import Learn from '../../public/images/learn.png'
import CustomerService from '../../public/images/customer-service.png'
import CreativeCloud from '../../public/images/creative-cloud.png'
import HardWork from '../../public/images/hard-work.png'
function SoftSkills() {
  return (
    <section id="softskills">
        <div>
            <SoftSkillBox image={Learn} title="Fast Learner" description="Quickly grasp new technologies and adapt to changing trends with enthusiasm and curiosity." />
            <SoftSkillBox image={CustomerService} title="Friendly Support" description="Always ready to help teammates and clients, creating a positive and collaborative environment" />
            <SoftSkillBox image={CreativeCloud} title="Creative" description="Think innovatively to design unique and user-friendly solutions that stand out." />
            <SoftSkillBox image={HardWork} title="Work Hard" description="Dedicated, consistent, and passionate about delivering high-quality results on time." />
        </div>
    </section>
  )
}

export default SoftSkills
