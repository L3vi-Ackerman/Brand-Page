import React from "react";
import '../App.css';

function Button({className,title}){


    return(
    <button className={className}>
        {title}
    </button>
    )
}

export default Button;