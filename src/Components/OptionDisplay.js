import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../store/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../store/slices/displayCountrySlice";

const OptionDisplay = () => {
    let currentPotentials = useSelector(selectPotentials);
    console.log("Current potential from Options", currentPotentials);

    const dispatch = useDispatch();

    return (
    <div className="stack">
        {currentPotentials.map((e, i) => {
            return (
                <h2 
                key={e.name.official} 
                className="country-option"
                onClick={() => {dispatch(setDisplayCountry(currentPotentials[i]))}}>
                    {e.name.common}
                </h2>
            );
        })}
    </div>
    );
};

export default OptionDisplay;