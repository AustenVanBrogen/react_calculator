import './Screen.css';
import React from 'react';

const Screen = ({value}) =>{
    return(
        <text className='screen' mode='single' max={70}>
            {value}
        </text>
    );
}

export default Screen;