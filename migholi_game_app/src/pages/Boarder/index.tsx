import "./index.css"
import React, { useState } from 'react';
function BorderGame(){
    const [toggle,setToggle] = useState("");
    const flipCard = () => {
        setToggle(toggle === 'flip' ? '' : 'flip');
      };
    const cards = document.querySelectorAll('.each-card');
    // function flipCard (this:any) {this.classList.toggle('flip'); console.log("hi")};
    cards.forEach(card => card.addEventListener('click' , flipCard));
    return (
    <section className="boarder-place">

        <div className="each-card">
            <img className="front" src="./images/migholi1.jpg" alt='migholi1'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img  className="front" src="./images/migholi1.jpg" alt='migholi1'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img  className="front" src="./images/migholi2.jpg" alt='migholi2'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img  className="front" src="./images/migholi2.jpg" alt='migholi2'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img  className="front" src="./images/migholi3.jpg" alt='migholi3'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img  className="front" src="./images/migholi3.jpg" alt='migholi3'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img  className="front" src="./images/migholi4.jpg" alt='migholi4'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img  className="front" src="./images/migholi4.jpg" alt='migholi4'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img  className="front" src="./images/migholi5.jpg" alt='migholi5'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img  className="front" src="./images/migholi5.jpg" alt='migholi5'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img  className="front" src="./images/migholi6.jpg" alt='migholi6'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img  className="front" src="./images/migholi6.jpg" alt='migholi6'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>
        
        {/* <div className="each-card">
            <img src="./images/migholi7.jpg" alt='migholi7'/>
            <img src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img src="./images/migholi7.jpg" alt='migholi7'/>
            <img src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>


        <div className="each-card">
            <img src="./images/migholi9.jpg" alt='migholi9'/>
            <img src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card">
            <img src="./images/migholi9.jpg" alt='migholi9'/>
            <img src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div> */}
        
    </section>
    );
}

export default BorderGame;
