import React from 'react'
import './footer.css'


function Footer() {
  return (
    <div className='footer-containor'>

        <div className='f-logo'>
            LOGO
        </div>

        <div className='footer-icon'>
            <a href='/'><img src='/img/nav-icon1.svg' alt='im'/></a>

            <a href='/'><img src='/img/nav-icon2.svg' alt='im'/></a>
            
            <a href='/'><img src='/img/nav-icon3.svg' alt='im'/></a>
        </div>
    </div>
  )
}

export default Footer