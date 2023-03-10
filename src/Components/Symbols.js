import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../store/slices/displayCountrySlice";

const Symbols = () => { 
    let currentDisplay = useSelector(selectDisplay);

    return (
    <div className="symbols">
        <div className="stack">
            <h2>Flag of {currentDisplay.name.common}:</h2>
            {currentDisplay.flags ? (
                <img src={currentDisplay.flags.png} alt="countries flag"/>
            ) : (
                "No Flag avaliable for display"
            )}
        </div>
        <div className="stack">
            <h2>Coat of Arm of {currentDisplay.name.common}:</h2>  
            {currentDisplay.coatOfArms ? (
                <img src={currentDisplay.coatOfArms.png} alt="coat of arms"/>
            ) : (
                "No CoA avaliable for display"
            )}
        </div>
    </div>
    ); 
};

export default Symbols;