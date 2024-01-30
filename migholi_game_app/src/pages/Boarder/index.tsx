import "./index.css"
import React, { useEffect ,useRef} from 'react';
function BorderGame(){

    let isFlipped = useRef(false);

    let card1 = useRef<HTMLElement | null>(null);
    let card2 = useRef<HTMLElement | null>(null);
  
    useEffect(() => {
      const flipCard = function (this: HTMLElement) {
        this.classList.add('flip');
  
        if (isFlipped.current) {
          card2.current = this;
        } else {
          card1.current = this;
        }
        // console.log(card1.current , "card1");
        // console.log(card2.current, "card2");
  
        isFlipped.current = !isFlipped.current;
        setTimeout(() => {
        if (card1.current && card2.current) {

            if(card1.current.dataset.name === card2.current.dataset.name){
                card1.current.removeEventListener('click', flipCard);
                card2.current.removeEventListener('click', flipCard);
            } else {  
                setTimeout(() => {}, 100);
                    console.log(card1.current , "card1");
                    console.log(card2.current, "card2");  
                    card1.current.classList.remove('flip');
                    card2.current.classList.remove('flip');
                
            }
            card1.current = null;
            card2.current = null;

        }
    }, 500);
      };
  
      const cards = document.querySelectorAll('.each-card');
      cards.forEach(card => card.addEventListener('click', flipCard));
  
      return () => {
        cards.forEach(card => card.removeEventListener('click', flipCard));
      };
    }, []);
  
        


    return (
    <section className="boarder-place">
        {/* add data- to name every image's name to call in function */}
        <div className="each-card" data-name="migholi1">
            <img className="front" src="./images/migholi1.jpg" alt='migholi1'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi6">
            <img  className="front" src="./images/migholi6.jpg" alt='migholi6'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi4">
            <img  className="front" src="./images/migholi4.jpg" alt='migholi4'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>
        
        <div className="each-card" data-name="migholi3">
            <img  className="front" src="./images/migholi3.jpg" alt='migholi3'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi2">
            <img  className="front" src="./images/migholi2.jpg" alt='migholi2'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi1">
            <img  className="front" src="./images/migholi1.jpg" alt='migholi1'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi2">
            <img  className="front" src="./images/migholi2.jpg" alt='migholi2'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>


        <div className="each-card" data-name="migholi5">
            <img  className="front" src="./images/migholi5.jpg" alt='migholi5'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi3">
            <img  className="front" src="./images/migholi3.jpg" alt='migholi3'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>


        <div className="each-card" data-name="migholi4">
            <img  className="front" src="./images/migholi4.jpg" alt='migholi4'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi5">
            <img  className="front" src="./images/migholi5.jpg" alt='migholi5'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi6">
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
