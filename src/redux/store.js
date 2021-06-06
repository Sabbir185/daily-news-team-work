import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./Reducers/Reducers";

const middleware = applyMiddleware(thunk)

const combineReducer = combineReducers({
    dataReducer,
})

const store = createStore(combineReducer, middleware);

export default store;