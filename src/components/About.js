import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
// import './css/about.css';
import Footer from'./Footer'
import { Link, useParams } from "react-router-dom";
import ProfileCard from '../components/ProfileCard';

const About = () => {
  const { id } = useParams();
  console.log(`id: ${id}`);

  const [profile, setProfile] = useState({});

  const getProfile = () => {
    fetch(`http://localhost:4000/profiles/${id}`)
    .then((res) => res.json())
    .then(profile => {
      setProfile(profile);
    })    
  }

  useEffect(() => {
    getProfile();
  }, []);

  console.log(`profile: ${JSON.stringify(profile)}`);

  return ( 
    <>
    <div className="container">
      <Navbar title="Profile viewer" icon="fab fa-forumbee"/>  


      <h1>  About Me </h1>
      <div class="row">

      <div class=" col-md-4 col-md-offset-2">
      
      
      </div>
  
  

          <ProfileCard id={profile.id} name={profile.name} email={profile.email} city={profile.city} phone={profile.phone} avatar={profile.image} rating={profile.rating} />

    </div>
  
<br></br>
      <div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}>
      </div>
      < Footer year={new Date().getFullYear()}/>
      </div>
  </>
   );

}
 
export default About;