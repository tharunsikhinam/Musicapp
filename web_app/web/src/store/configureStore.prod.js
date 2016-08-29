/**
 * Created by quikr on 7/13/16.
 */
import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
//takes in two parameters to create store, one is initial state.. here you can set some state values that you want
//pre built into the store
//one can add middlewares as well . done using applymiddleware (mw1(), mw2()..)
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
/**
 * Created by quikr on 7/18/16.
 */
