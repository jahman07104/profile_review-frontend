import React, { useEffect, useState } from "react";
import Card from "../components/card";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { getProfiles } from "../actionCreator/setProfiles";
import store from "../store";

const Home = (props) => {
  useEffect(() => {
    store.dispatch(getProfiles());
  }, []);

  const [name, setName ] = useState("")
  
  let profileItems = props.profiles.profiles.filter((profile) => 
  profile.name.toLowerCase().includes(name)).map((profile, index) => {
    
    return (
      <Card
        id={profile.id}
        name={profile.name}
        email={profile.email}
        city={profile.city}
        phone={profile.phone}
        avatar={profile.image}
        rating={profile.rating}
        key={index}
        
      />
    );
  });
  return (
    
    <div className='container'>
      <Navbar title='Profile viewer' icon='fab fa-forumbee' />
      <input type="text" onChange={(e) => setName(e.target.value)}
    
      />
      <div className='row'>
      {profileItems}
      </div>
      
      <br></br>
      <div
        style={{ borderTop: "2px solid #fff ", marginLeft: 4, marginRight: 4 }}
      ></div>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  profiles: state.profiles,
  
});

export default connect(mapStateToProps)(Home);
