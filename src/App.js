import React  from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Instructions from './components/Instructions';
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/instructions" component={Instructions} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
