import './Screen.css';

const Screen = ({value}) =>{
    return(
        <text className='screen' mode='single' max={70}>
            {value}
        </text>
    );
}

export default Screen;