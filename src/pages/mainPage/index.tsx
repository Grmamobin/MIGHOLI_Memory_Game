import React from "react";
import {useNavigate} from 'react-router-dom';
import "./index.css";
import Button from "../../components/Button";

function MainPage() {
    const navigate = useNavigate();
    const start_game = () => {
        navigate('/border');
    };
    return(
        <>
        <section className="all-things">
            <img className="chair" src="./images/beach-chair2.png" alt="chair"/>
            <div className="sun"></div>
            <img className="stylish" src="./images/migholi_background4.svg" alt="sunny_migholi"/>
            <div className="btn">
                <Button BtnValue="START" onClick={start_game}/>
            </div>
        </section>
        </>
    );

};
export default MainPage;