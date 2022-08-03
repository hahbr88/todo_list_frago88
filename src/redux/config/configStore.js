import { createStore } from "redux";
import { combineReducers } from "redux";

import inputTodo from "../modules/inputTodo";

const rootReducer = combineReducers({
    inputTodo : inputTodo,
});
const store = createStore(rootReducer);

export default store;