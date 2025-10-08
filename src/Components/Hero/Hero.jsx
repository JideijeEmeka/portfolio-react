import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='hero' />
        <h1><span>I'm Emeka Jideije,</span> frontend developer based in Nigeria</h1>
        <p>I'm a frontend developer from Enugu, Nigeria with 4 years of experience in multiple companies 
            like Microsoft, Tesla, and Apple.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' href='#contact'>Connect With Me</AnchorLink>
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div>
    </div>
  )
}

export default Hero