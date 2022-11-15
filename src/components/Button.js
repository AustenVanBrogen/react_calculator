import './Button.css';
import React from 'react';

const Button = ({className, value, onClick}) =>{
    return(
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
}

export default Button