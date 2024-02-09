import Button from "../Button";
import "./index.css"
import React from 'react';
import {useNavigate} from 'react-router-dom';

interface Modal{
    statues: string;
    images : string;
    alt_image : string;
}

function RestartOrNot(props: Modal)  {
    const {statues,images,alt_image} = props;
    const navigate = useNavigate();
    const start_game = () => {
        window.location.reload();
    };
    const exit_game = () => {
        navigate('/');
    };
    
    return(
        <>
        <section className="rectangle">
            <div className="container">
                <div className="title">
                    <h1>{statues}</h1>
                    <img style={{height:"200px"}} src={images} alt={alt_image}/>
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