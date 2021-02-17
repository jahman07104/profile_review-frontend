import React, { useEffect } from 'react';
import Card from '../components/card'
import Navbar from './Navbar';
import StarRating from './StarRating';
import About from './About';
import Footer from '../components/Footer';
import PageNotFound from './PageNotFound'
import { connect } from "react-redux";
import { setProfiles, getProfiles } from '../actionCreator/setProfiles';
import store from '../store';

const Home = ( {profiles, setProfiles} ) => {
  useEffect(() => {
    store.dispatch(getProfiles());
  }, []);

  const updateProfiles = (deletedProfileId) => {
    console.log(`INSIDE updateProfiles!!! deletedProfileId: ${deletedProfileId}`);
    const updatedProfiles = profiles.filter((profile) => {
      if (profile.id !== deletedProfileId) {
        return profile;      
      }
    })
    setProfiles(updatedProfiles);
  }

  const profileItems = profiles.map((profile) => {
    return <Card updateProfiles={updateProfiles} id={profile.id} name={profile.name} email={profile.email} city={profile.city} phone={profile.phone} avatar={profile.image} rating={profile.rating} />
  })

  return (
  <div className="container">
    <Navbar title="Profile viewer" icon="fab fa-forumbee"/>    
      <div className="row">
        {profileItems}
      </div>
      <br></br>        
      <div style={{ borderTop: "2px solid #fff ", marginLeft: 4, marginRight: 4 }}>    
      </div>
     
      <Footer year={new Date().getFullYear()} />
  </div>
  );  
}

// props.profiles, props.setProfiles
const mapStateToProps = ({ profiles }) => ({
  profiles
});

// setting data to redux store
const mapDispatchToProps = dispatch => ({
  setProfiles: profiles => dispatch(setProfiles(profiles)) // { type: "SET_PROFILES", payload: [{ name: 'Patrickprofiles ', email: 'test'}]
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

