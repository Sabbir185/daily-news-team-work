import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { dataReducer, userReducer } from "./Reducers/Reducers";

const middleware = applyMiddleware(thunk)

const combineReducer = combineReducers({
    dataReducer,
    userReducer
})

const store = createStore(combineReducer, composeWithDevTools(middleware));

export default store;