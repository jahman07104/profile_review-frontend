import React, { useState, useEffect } from 'react';
// import './App.css';
import Card from '../components/card'
// import {BrowserRouter as Router, Route, Link} from "react-router-dom"
// import Comments from './components/comments';
// import {Button} from 'react-bootstrap';
// import Header from './components/layout/Header'
import Navbar from './Navbar';
// import Rating from '../components/Rating';
import Footer from '../components/Footer';

const Home = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/profiles")
      .then((r) => r.json())
      .then(profiles => {
        setProfiles(profiles)
      })
  }, []);

  const profileItems = profiles.map((profile) => {
    return <Card id={profile.id} name={profile.name} email={profile.email} city={profile.city} phone={profile.phone} avatar={profile.image} rating={profile.rating} />
  })

  return (
  <div className="container">
    <Navbar title="profile viewer" icon="fab fa-forumbee"/>    
      <div className="row">
      {profileItems}
  </div>  
  <br></br>        
  <div style={{ borderTop: "2px solid #fff ", marginLeft: 4, marginRight: 4 }}></div>
  
  < Footer year={new Date().getFullYear()}/> 
  </div>
  );  
  }

export default Home;

