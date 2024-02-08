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
        <div className="beach">
            <div className='sand-dots'>
                <span className='dot'></span>
            </div>
        </div>

        <img className="chair" src="./images/beach-chair2.png" alt="chair"></img>
        <div className="sun"></div>
        <img className="stylish" src="./images/migholi_background4.svg" alt="sunny_migholi" ></img>
        <div className="btn">
        <Button BtnValue="START" onClick={start_game}/>
        </div>
        </section>
        {/* <img className="date_palm" src="./images/palm-tree.png" alt="palm" ></img> */}
        
        </>
    );

};
export default MainPage;