import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom';

const Button = ({children}) => {
    return (
        <div>
            <Link to='/events' style={{ textDecoration: 'none'}}>
                <button type="button" id='buton-intro'
                >{children}</button>
            </Link>
        </div>   
    )
}

export default Button