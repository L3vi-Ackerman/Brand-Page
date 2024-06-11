import React from "react";
import Navbar from './Navbar'
import Button from "./Button";
import '../App.css'

function Main() {
    return (<>
        {/* <div className="container"> */}
        <Navbar />
        <div className="hero-content">
            <div className="hero-left">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <h3>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVER THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</h3>
                <div className="hero-left-btns">
                    <Button className='shopnow-btn' title='Shop Now'/>
                    <Button className='category-btn' title='Category' />
                </div>
                <p>Also Available On</p>
                <div className="extra-logos">
                    <img src="/daraz.png" alt="" />
                    <img src="/amazon.png" alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src="/shoe.png" alt="Nike Shoe Image" />
                <div className="shadow"></div>
            </div>

        </div>
        {/* </div> */}


    </>);
}

export default Main;