import React from "react";
import "./index.css";
function MainPage() {
    return(
        <>
        {/* <button className="globe"></button> */}
    
        {/* <img style={{width:"100px" , height:"100px"}} src="./images/migholi_background.svg" alt="migh" ></img>
        <img style={{width:"100px" , height:"100px"}} src="./images/migholi_background2.svg" alt="migho" ></img> */}
        <section className="all-things">
        <div className="beach">
            <div className='sand-dots'>
                <span className='dot'></span>
            </div>
        </div>

        <img className="chair" src="./images/beach-chair2.png" alt="chair"></img>
        <div className="sun"></div>
        <img className="stylish" src="./images/migholi_background4.svg" alt="migho" ></img>
        </section>
        {/* <img className="date_palm" src="./images/palm-tree.png" alt="palm" ></img> */}
        
        </>
    );

};
export default MainPage;