import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "./index.css"
import Button from "../Button";

interface Modal{
    statues: string;
    score:number;
    images : string;
    alt_image : string;
}

function RestartOrNot(props: Modal)  {
    const {statues,images,alt_image,score } = props;
    const navigate = useNavigate();
    const start_game = () => {
        window.location.reload();
    };
    const exit_game = () => {
        navigate('/');
    };

    useEffect(() => {
        const savedData = localStorage.getItem('score');
        if(savedData!=null || (score>Number(savedData))){
            localStorage.setItem('score', score.toString());
        }

    }, []);
    return(
        <>
        <section className="surrounded">
            <div className="container">
                <div className="title">
                    <h1>{statues}</h1>
                    <h3>your score is:{score}</h3>
                    <img style={{height:"170px"}} src={images} alt={alt_image}/>
                </div>
                <div className="title">
                    <p>Do you wanna play again?</p>
                </div>
                <div className="btn">
                    <Button  BtnValue="RESTART" onClick={start_game}/>
                    <Button  BtnValue="EXIT" onClick={exit_game}/>
                </div>
            </div>
        </section>
        </>
    );
}
export default RestartOrNot;