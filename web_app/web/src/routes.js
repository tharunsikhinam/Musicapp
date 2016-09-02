/**
 * Created by quikr on 7/12/16.
 */
import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AppContainer from "./react_src/main";
import CoursePage from "./components/courses/CoursePage";
import Forgot from "./react_src/containers/Forgot";
import MusicPage from "./components/MusicPage";
import MusicHome from "./components/MusicDJ";
export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/hrmslogin/indexx.html" component={Forgot}/>
    <Route path="forgot" component={Forgot}/>
    <Route path="users" component={CoursePage} />
      <Route path="djmusic" component={MusicHome} />
      <Route path="music" component={MusicPage} />
    <Route path="login" component={AppContainer} />
  </Route>
);
