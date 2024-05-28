import React from "react";
import {useNavigate} from 'react-router-dom';
import "./index.css";
import Button from "../../components/Button";

function MainPage() {
    const navigate = useNavigate();
    const start_game = () => {
        navigate('/border');
    };
    let highest_score = localStorage.getItem('score');
    if(highest_score==null){
        highest_score='0';
    }
    return(
        <>
        <section className="all-things">
            <img className="chair" src="./images/beach-chair2.png" alt="chair"/>
            <div className="sun"></div>
            <p className="alert-text">😈don't click on the score bar😈</p>
            <img className="stylish" src="./images/migholi_background4.svg" alt="sunny_migholi"/>
            <div className="btn">
                <Button BtnValue="START" onClick={start_game}/>
            </div>
            <div className="hi-score">
                <Button BtnValue={'record:'+highest_score} onClick={()=>{}}/>
            </div>
        </section>
        </>
    );

};
export default MainPage;