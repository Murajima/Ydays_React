import { createStore, combineReducers } from 'redux';
import counterReducer from "./counterReducer";
import todoListReducer from "./todoListReducer";

const store = createStore(
  combineReducers({
    counterReducer,
    todoListReducer
}));

export default store;