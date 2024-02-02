import "./index.css"
import React, { useEffect ,useRef , useState} from 'react';
import Confetti from "react-confetti";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function BorderGame(){

    let isFlipped = useRef(false);

    let card1 = useRef<HTMLElement | null>(null);
    let card2 = useRef<HTMLElement | null>(null);

    let [confetti , setConfetti] = useState(false);

    const soundRef = useRef<HTMLAudioElement | null>(null);
    // const videoRef = useRef<HTMLAudioElement | null>(null);
    // const videoFun = "videos/funWin.mp4"
    const audioWrong = "sounds/no.mp3"
    const audioCorrect = "sounds/mixkit-bonus-earned-in-video-game-2058.wav"
    const audioWin = "sounds/wee.mp3"
    const audioFail = "sounds/fail-jingle-stereo-mix-88784.mp3"

    useEffect(() => {
      const flipCard = function (this: HTMLElement) {
        if(this === card1.current) return;
        this.classList.add('flip');
  
        if (isFlipped.current) {
          card2.current = this;
        } else {
          card1.current = this;
        }

        isFlipped.current = !isFlipped.current;

        setTimeout(() => {
        if (card1.current && card2.current) {

            if(card1.current.dataset.name === card2.current.dataset.name){
                    soundRef.current = new Audio(audioCorrect);
                    soundRef.current?.play();
                    // videoFunPlay();
                    card1.current.removeEventListener('click', flipCard);
                    card2.current.removeEventListener('click', flipCard);
            } else {  
                    soundRef.current = new Audio(audioWrong);
                    soundRef.current?.play();
                    card1.current.classList.remove('flip');
                    card2.current.classList.remove('flip');
                    
            }
            card1.current = null;
            card2.current = null;
        }
    }, 500);

    const each_card_flipped: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('.each-card.flip');

    if (each_card_flipped.length === 16){
        setConfetti(true);
        soundRef.current = new Audio(audioWin);
        soundRef.current?.play();
        setTimeout(() =>{ setConfetti(false);},50000)
    }

    };

      function randomCard(): void {
        const cards: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('.each-card');

        cards.forEach((card: HTMLElement) => {
          let rand: number = Math.floor(Math.random() * 25);
          card.style.order = rand.toString();
        });

      }

      randomCard()

      const cards = document.querySelectorAll('.each-card');
      cards.forEach(card => card.addEventListener('click', flipCard));
  
      return () => {
        cards.forEach(card => card.removeEventListener('click', flipCard));
      };
    }, []);
    
    // FUNCTIONS:: INIT
    const addConfetti = () => {
        return <Confetti style={{width:"100vw", height:"100vh"}} recycle={false}/>;
      };

    const playMusic = () => {
       
        soundRef.current= new Audio(audioFail);
        soundRef.current.muted = false;
        soundRef.current?.play();
    }

    const renderTime = ({ remainingTime }: { remainingTime: number }) => {

        if (remainingTime === 0) {
            return (<div className="timer">Time is Up !</div>);
        }

        return (
            <div className="timer">
            <div>Time Remaining</div>
            <div>{remainingTime + ` S`}</div>
            </div>
        );
    };

    const counter_timer = () => {
    return (
        <div className="countdown-timer">
        <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[60, 30, 10, 0]}
            size={150}
            onComplete={() => playMusic()}
        >
            {renderTime}
        </CountdownCircleTimer>
        </div>
    )};


    return (
        <>
    {counter_timer()}
    <section className="boarder-place">
    {confetti && addConfetti()}
        {/* add data- to name every image's name to call in function */}
        <div className="each-card" data-name="migholi1">
            <img className="front" src="./images/migholi1.jpg" alt='migholi1'/>
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

        <div className="each-card" data-name="migholi2">
            <img  className="front" src="./images/migholi2.jpg" alt='migholi2'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>
        
        <div className="each-card" data-name="migholi3">
            <img  className="front" src="./images/migholi3.jpg" alt='migholi3'/>
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

        <div className="each-card" data-name="migholi4">
            <img  className="front" src="./images/migholi4.jpg" alt='migholi4'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi5">
            <img  className="front" src="./images/migholi5.jpg" alt='migholi5'/>
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

        <div className="each-card" data-name="migholi6">
            <img  className="front" src="./images/migholi6.jpg" alt='migholi6'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi7">
            <img  className="front" src="./images/migholi7.jpg" alt='migholi7'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi7">
            <img  className="front" src="./images/migholi7.jpg" alt='migholi7'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi9">
            <img  className="front" src="./images/migholi9.jpg" alt='migholi9'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>

        <div className="each-card" data-name="migholi9">
            <img  className="front" src="./images/migholi9.jpg" alt='migholi9'/>
            <img  className="back" src="./images/migholi_otherWay1.jpg" alt='migholi_back'/>
        </div>
        
    </section>
    </>
    );
}

export default BorderGame;