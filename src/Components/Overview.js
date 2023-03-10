import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../store/slices/displayCountrySlice";

const Overview = () => { 
    let currentDisplay = useSelector(selectDisplay);

    return (
        <div className="stack">
            <h1>{currentDisplay.name.official}</h1>
            <h2>{currentDisplay.name.official}</h2>

            <table>
                <thead>
                    <tr>
                        <td>Borders: </td>
                            <td>
                                {currentDisplay.borders
                                    ? currentDisplay.borders.map((e, i, arr) => {
                                        if (i + 1 === arr.length) {
                                            return `${e}`;
                                        } else {
                                            return `${e}, `;
                                        }
                                    })
                                    : "N/A"}
                            </td>
                        </tr>
                        <tr>
                            <td>Capitol: </td>
                            {currentDisplay.capital.map((e) => (
                                <td>{e}</td>
                            ))}
                        </tr>
                        <td>Population: </td>
                            <td>{currentDisplay.population}</td>
                        <tr>
                            <td>Continents: </td>
                            {currentDisplay.continents.map((e) => (
                                <td>{e}</td>))}
                        </tr>
                </thead>
            </table>
        </div>
    );
};

export default Overview;