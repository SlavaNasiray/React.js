import reducer from "./reducers";
import { createStore } from "redux";
import { combineReducers } from "redux";
import countReducer from "./reducers/count";

const store = createStore(
	combineReducers({ books: reducer, count: countReducer })
);
/* const store = createStore(reducer); */

export default store;
