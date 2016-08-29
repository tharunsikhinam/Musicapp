/*eslint-disable import/default*/
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Router, browserHistory} from "react-router";
import routes from "./routes";
import configureStore from "./store/configureStore";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Provider} from "react-redux";
import {loadCourses} from "./actions/courseActions";
import injectTapEventPlugin from 'react-tap-event-plugin';

//react imports
//router imports
//store imports
//actions imports
//import HomePage from './components/home/HomePage';
//css styles


//generally pass initial state as default parameters in each of the reducers..., pass initial state in configure store
//if server sends some data or fields that need to filled up before app starts off.



const store = configureStore();

//load a part of the store by dispatching actions.. here loadcourses is an action form courseactions js
//load courses does an ajax call and sends the data to an action creator, which goes to a reducer and ......

store.dispatch(loadCourses());
injectTapEventPlugin();

//Provider is used to connect the react components to the redux store
ReactDOM.render (<Provider store={store} >
    <MuiThemeProvider   >
        <Router history={browserHistory} routes={routes} />

    </MuiThemeProvider>

  </Provider>,document.getElementById('app')
);
//ReactDOM.render(<HomePage/>,document.getElementById('app'));


