import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
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
  
      <div class="d-block text-white" >
      <Link to="/" className="d-block text-white">Home</Link>
      </div>

      <div >
      <Link to="Instructions" className="d-block text-white">Instructions</Link>
      </div>
  

      <h1> This will be the  Abouts page </h1>

      <ProfileCard id={profile.id} name={profile.name} email={profile.email} city={profile.city} phone={profile.phone} avatar={profile.image} rating={profile.rating} />
    
      <div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div>
      < Footer year={new Date().getFullYear()}/>
      </div>
  </>
   );

}
 
export default About;