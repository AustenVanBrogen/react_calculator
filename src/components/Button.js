import './Button.css'

const button = ({className, value, onClick}) =>{
    return(
        <button className={classNme} onClick={onClick}>
            {value}
        </button>
    );
}

export default Button