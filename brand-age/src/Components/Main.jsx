import React from "react";
import Button from "./Button";
import '../App.css'

function Main() {
    return (<>
        <div className="hero-content">
            <div className="hero-left">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVER THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-left-btns">

                <Button className='shopnow-btn' title='Shop Now' btnStyle={{
                    color: 'white',
                    backgroundColor: '#D4242E',
                    fontSize:'1vw'
                }} />
                <Button className='category-btn' title='Category' btnStyle={{
                    color: 'grey',
                    backgroundColor: 'white',
                    fontSize:'1vw'
                }} />
                </div>

            </div>
            <div className="hero-right">
                <img src="/shoe.png" alt="Nike Shoe Image" />
            </div>

        </div>

    </>);
}

export default Main;