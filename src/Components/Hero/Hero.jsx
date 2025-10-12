import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import me_dev from '../../assets/me_dev.jpg'
import flutter_resume from '../../assets/flutter_resume.pdf'

const Hero = () => {

  const handleDownload = () => {
    const pdfUrl = '/path/to/your/resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    link.click();
  };

  const openResume = () => {
    window.open(flutter_resume, '_blank');
  };


  return (
    <div id='home' className='hero'>
        <img src={me_dev} alt='hero' />
        <h1><span>I'm Emeka Jideije,</span> Flutter engineer and web frontend developer based in Nigeria</h1>
        <p>I'm a flutter engineer and web frontend developer from Enugu, Nigeria with 4 years of experience in multiple companies 
            like Adastra Tech, Platnova, and Core Platforms.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' href='#contact'>Connect With Me</AnchorLink>
                </div>
                <div className="hero-resume" onClick={openResume}>
                    My Resume
                </div>
            </div>
    </div>
  )
}

export default Hero