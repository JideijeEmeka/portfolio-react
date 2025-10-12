import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './MyLogo.css'

const MyLogo = () => {
  return (
    <div className='myLogo'>
        <div className="myLogo-title">
            <h1>Emeka</h1>
            <img src={theme_pattern} alt='' />
        </div>
    </div>
  )
}

export default MyLogo