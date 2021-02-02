import React, { Component } from 'react'; 
import './App.css';
import Card from '../components/card'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
// import Comments from './components/comments';
import {Button} from 'react-bootstrap';
// import Header from './components/layout/Header'
import Navbar from '../components/layout/Navbar';
import Home from '../components/Home';
import Rating from '../components/Rating';
import Footer from '../components/Footer'


class App extends Component {
  constructor(props) {
  super(props);
  this.state = { field: "",submitDisabled: true };
  }

render() {


  return (
    
  <div className="container">
    <Navbar title="profile viewer" icon="fab fa-forumbee"/>
    {/* < Header name="review and rate a profile"/> */}
      <div className="row">
      
        {/* <Card name={this.state.personName} job="Pilot" avatarId={this.state.avatarId} /> */}
        <Card name="James Baker" email="james@gmail.com" city="" phone="" avatarId={52} />
      
        <Card name="Jennifer Jones" email="Jennifer@gmail.com" city="" phone="" avatarId={28}/>
        
        <Card name="Patrick Harrison"email="jahman@verizon.com" city="" phone=""avatarId={51}/>
        
        <Card name="Julie Domminick"  email="julie@msn,com" city="" phone="" avatarId={40} />
        
        <Card name="Howard Mason"  email="Howard@aol.com" city="" phone="" avatarId={68} />
        
        <Card name="Mary Hibbert" email="mary@gmail.com" city="" phone="" avatarId={47} />
        
      </div>
      {/* <Home />
      
      <Comments /> */}
      <Button variant="danger">Default</Button>
 <div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div>

      < Footer year={new Date().getFullYear()}/>
  </div>

  
  );
  }
}
export default App;



