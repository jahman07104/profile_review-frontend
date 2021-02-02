import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'; 
import App from './Containers/App';


const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};
 
const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};


ReactDOM.render(
<Router>
  <App />
</Router>,
document.getElementById('root')
);

