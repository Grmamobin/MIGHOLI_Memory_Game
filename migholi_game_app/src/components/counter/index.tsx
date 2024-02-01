import "./index.css"
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function countdownTimer() {
    
    const UrgeWithPleasureComponent = () => {
        return <CountdownCircleTimer
        isPlaying
        duration={60}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[60, 30, 10, 0]}
    >
        {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
    };
    
    return(
        <>
            {UrgeWithPleasureComponent()}
        </>
    );
}
export default countdownTimer;