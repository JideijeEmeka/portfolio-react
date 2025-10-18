import React, { useState } from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import MyLogo from '../Logo/MyLogo'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [isSubscribing, setIsSubscribing] = useState(false)
    const [subscribeMessage, setSubscribeMessage] = useState('')

    const subscribe = async (event) => {
        event.preventDefault();
        
        if (!email.trim()) {
            setSubscribeMessage('Please enter your email address')
            return
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setSubscribeMessage('Please enter a valid email address')
            return
        }

        setIsSubscribing(true)
        setSubscribeMessage('')

        try {
          const formData = new FormData();
          formData.append("email", email);
          formData.append("access_key", "e4faf47f-ef02-4ea8-8f9a-68577f8fd51c");
      
          const json = JSON.stringify(Object.fromEntries(formData));
      
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: json,
          });
      
          const data = await res.json();
      
          if (data.success) {
            setSubscribeMessage('Thank you for subscribing!')
            setEmail('')
          } else {
            setSubscribeMessage(data.message || "Subscription failed.")
          }
        } catch (err) {
          setSubscribeMessage("Network error. Please try again.")
          console.error(err);
        } finally {
          setIsSubscribing(false)
        }
      };

  return (
    <div className='footer'>
        <div className="footer-logo">
            <MyLogo />
        </div>
        <div className="footer-top">
            <div className="footer-top-left">
                <p>I'm a flutter engineer and web frontend developer from Enugu, Nigeria with 4 years of experience in multiple companies 
                like Adastra Tech, Platnova, and Core Platforms.</p>
            </div>
            <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt='' />
                        <input 
                            type='email' 
                            placeholder='Enter your email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="footer-subscribe" onClick={subscribe} disabled={isSubscribing}>
                        {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                    </div>
            </div>
        </div>
        {subscribeMessage && (
                    <div className={`subscribe-message ${subscribeMessage.includes('Thank you') ? 'success' : 'error'}`}>
                        {subscribeMessage}
                    </div>
                )}
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                © 2025 Emeka Jideije. All Rights Reserved.
            </p>
            <div className="footer-bottom-right">
                <p><AnchorLink className='anchor-link' href='#services'>My Services</AnchorLink></p>
                <p><AnchorLink className='anchor-link' href='#work'>Portfolio</AnchorLink></p>
                <p><AnchorLink className='anchor-link' href='#contact'>Connect with me</AnchorLink></p>
            </div>
        </div>
    </div>
  )
}

export default Footer