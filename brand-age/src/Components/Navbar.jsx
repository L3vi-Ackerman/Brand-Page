import React from "react";
import Button from "./Button";
import '../App.css'
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <img src="/logo.png" alt="Nike logo" height={50} width={100} />
                </div>
                <div className="navbar-links">
                    <li><a href="">MENU</a></li>
                    <li><a href="">LOCATION</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT</a></li>
                </div>
                <div className="navbar-login-btn">
                    <Button className='login-btn' title='Login' btnStyle={{
                        color: 'white',
                        backgroundColor: '#D4242E'
                    }} />
                </div>
            </div>
        </>
    )
}

export default Navbar;