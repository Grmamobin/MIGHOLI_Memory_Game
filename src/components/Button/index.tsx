import React from "react";
import "./index.css";

interface ButtonWorth{
    BtnValue: string;
    onClick?: (formValues: any) => void; 
}

function Button(props:ButtonWorth) {
    const {BtnValue,onClick} = props;
    return(
        <button
            type="button"
            value={BtnValue}
            onClick={onClick}
            className={`button`}
        >
        {BtnValue}
        </button>
    )

}
export default Button;