import React from 'react'

import './button.css'
export const Button = ({
buttonstyle,
type, 
onclick,
buttonsize,
content


}) => {
    let style = ["btn-primary", "btn-outline", "btn-test"]
    let size = ["btn-meduim", "btn-large"]
    let che_btn_style = style.includes(buttonstyle) ? buttonstyle : style[0]
    let che_btn_size= size.includes(buttonsize) ? buttonsize : size[0]

    return (
        <a href="/" className='btn-mobile'>
            <button 
            className={`btn ${che_btn_style} ${che_btn_size}`}
            onClick={onclick}
            type={type}
            >
                {content}
            </button>
        </a>
    )
}

