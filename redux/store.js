import { createStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers/reducer";

 const store = createStore(reducer);
 export default store