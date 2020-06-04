import reducer from "./reducers";
import { createStore } from "redux";
import { combaineReducers } from "redux";
import countReducer from "./reducers/count";

const store = createStore(
	combaineReducers({ books: reducer, count: countReducer })
);
/* const store = createStore(reducer); */

export default store;
