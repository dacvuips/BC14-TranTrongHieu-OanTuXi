import { combineReducers } from "redux";
import userReducer from "./user";

const rootReduce = combineReducers({

    userReducer,
})

export default rootReduce;