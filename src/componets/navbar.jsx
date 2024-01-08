import React from 'react'
import { Button }  from './Button'

import './nav.css'
export default function Navbar() {
  return (
    <nav>
        <div className='nav-containor'>
            <div className='logo'>
                LOGO
            </div>

            <div className='list-content'>
                <ul className='list'>
                    <a className="list-link" href="/">
                        <li>Home</li>   
                    </a>
                    <a className="list-link" href="/">
                        <li>Skills</li>
                    </a>
                    <a className="list-link" href="/">
                        <li>Projects</li>
                    </a>

                </ul>

                <div className='icon-social'>
                    <a href='/'><img src='/img/nav-icon1.svg' alt='imag'/></a>

                    <a href='/'><img src='/img/nav-icon2.svg' alt='imag'/></a>
                    
                    <a href='/'><img src='/img/nav-icon3.svg' alt='imag'/></a>
                </div>

                <Button 
                buttonsize="btn-medium" 
                buttonstyle="btn-outline"
                content="let's connect"
                />
            </div>


        </div>
    </nav>
  )
}
