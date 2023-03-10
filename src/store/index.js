import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "../store/slices/potentialCountriesSlice";
import displayedCountrySliceReducer from "../store/slices/displayCountrySlice";


export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountrySliceReducer,
    },
});
