import React from "react";
import '../App.css';

function Button({className,title,btnStyle}){
    const buttonStyle = {
        ...btnStyle,
        padding:'5px 20px 5px 20px',
        border:'2px solid grey',
        fontSize:'1.1vw'
    }

    return(
    <button style={buttonStyle} className={className}>
        {title}
    </button>
    )
}

export default Button;