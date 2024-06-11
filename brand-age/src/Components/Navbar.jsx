import React from "react";
import Button from "./Button";
import { useState } from "react";
import '../App.css'
import { click } from "@testing-library/user-event/dist/click";
function Navbar() {
    const [clickState, setClickState] = useState(false);

    const handleClick = () => {
        setClickState(prevState => !prevState)
    }


    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <img src="/logo.png" alt="Nike logo" height={50} width={100} />
                </div>
                <div className={clickState ? 'navbar-links active' :'navbar-links'} >
                    <li><a href="">MENU</a></li>
                    <li><a href="">LOCATION</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT</a></li>
                    
                </div>
                <div className="mobile" onClick={handleClick}>
                        <i id='bar' className={clickState ?'ri-close-fill' : 'ri-menu-3-line'}></i>
                    </div>
                <div className="navbar-login-btn">
                    <Button className='login-btn' title='Login' />
                </div>
            </div>
        </>
    )
}

export default Navbar;