import { createStore } from "redux";
import mobileReducer from "./reducer";

const store = createStore(mobileReducer);
export default store;