import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})

    const validateForm = (formData) => {
        const newErrors = {}
        
        if (!formData.get('name')?.trim()) {
            newErrors.name = 'Name is required'
        }
        
        if (!formData.get('email')?.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get('email'))) {
            newErrors.email = 'Please enter a valid email address'
        }
        
        if (!formData.get('message')?.trim()) {
            newErrors.message = 'Message is required'
        }
        
        return newErrors
    }

    const validateField = (name, value) => {
        const trimmedValue = value?.trim()
        
        switch (name) {
            case 'name':
                return trimmedValue ? '' : 'Name is required'
            case 'email':
                if (!trimmedValue) return 'Email is required'
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
                    return 'Please enter a valid email address'
                }
                return ''
            case 'message':
                return trimmedValue ? '' : 'Message is required'
            default:
                return ''
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        const fieldError = validateField(name, value)
        
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: fieldError
        }))
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const validationErrors = validateForm(formData)
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }
        
        setErrors({})
        setIsLoading(true)
        
        try {
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
            setErrors({})
          } else {
            alert(data.message || "Submission failed.");
          }
        } catch (err) {
          alert("Network error. Please try again.");
          console.error(err);
        } finally {
          setIsLoading(false)
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
                <input 
                    type='text' 
                    placeholder='Enter your name' 
                    name='name' 
                    className={errors.name ? 'error' : ''}
                    onChange={handleInputChange}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
                
                <label htmlFor=''>Your Email</label>
                <input 
                    type='email' 
                    placeholder='Enter your email' 
                    name='email' 
                    className={errors.email ? 'error' : ''}
                    onChange={handleInputChange}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
                
                <label htmlFor=''>Write your message here</label>
                <textarea 
                    rows={8} 
                    placeholder='Enter your message' 
                    name='message' 
                    className={errors.message ? 'error' : ''}
                    onChange={handleInputChange}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
                
                <button type='submit' className='contact-submit' disabled={isLoading}>
                    {isLoading ? (
                        <div className="loader-container">
                            <div className="loader"></div>
                            <span>Submitting...</span>
                        </div>
                    ) : (
                        'Submit now'
                    )}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact