import React from 'react'
import './Button.css'


const Button = ({children}) => {
    return (
        <button type="button" id='buton-intro'
        >{children}</button>
    )
}

export default Button