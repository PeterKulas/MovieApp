import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favourites";

const store = configureStore({ reducer: favouritesReducer });

export default store;
