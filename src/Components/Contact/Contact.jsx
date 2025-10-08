import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
          const formData = new FormData(event.target);
          formData.append("access_key", "e4faf47f-ef02-4ea8-8f9a-68577f8fd51c");
      
          const json = JSON.stringify(Object.fromEntries(formData));
      
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: json,
          });
      
          const data = await res.json();
      
          if (data.success) {
            alert(data.message);            // will show on success
            event.target.reset();
          } else {
            alert(data.message || "Submission failed.");
          }
        } catch (err) {
          alert("Network error. Please try again.");
          console.error(err);
        }
      };
      
    
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message
                    about anything you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt='' />
                            <p>jideije.emeka@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt='' />
                            <p>+234 8140087091</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt='' />
                            <p>Enugu, Nigeria</p>
                        </div>
                    </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name' />
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email' />
                <label htmlFor=''>Write your message here</label>
                <textarea rows={8} placeholder='Enter your message' name='message' />
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact