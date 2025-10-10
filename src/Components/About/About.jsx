import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import me_dev from '../../assets/me_dev.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt='about' />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={me_dev} alt='about' />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm an experienced flutter engineer and web frontend developer with 4 years of professional expertise in the field.
                         Through out my career, I've had the priviledge of collaborating with prestigious organizations, 
                         contributing to their success and growth.</p>
                    <p>My passion for flutter and web frontend development is not only reflected in my extensive experience 
                        but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Flutter</p><hr style={{width: '70%'}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: '60%'}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: '60%'}}/></div>
                    <div className="about-skill"><p>AI</p><hr style={{width: '50%'}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>3+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About