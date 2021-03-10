import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AboutThisApp from "./components/AboutThisApp";
import Instructions from "./components/Instructions";
import store from "./store";
import { Provider } from "react-redux";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/about-this-app' component={AboutThisApp} />
          <Route exact path='/instructions' component={Instructions} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
