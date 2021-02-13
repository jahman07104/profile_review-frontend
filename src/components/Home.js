import React, { useEffect } from 'react';
import Card from '../components/card'
import Navbar from './Navbar';
import StarRating from './StarRating';
import Footer from '../components/Footer';
import PageNotFound from './PageNotFound'
import { connect } from "react-redux";
import setProfiles from '../actionCreator/setProfiles';

const Home = ( {profiles, setProfiles} ) => {
  useEffect(() => {
    fetch("http://localhost:4000/profiles")
      .then((res) => res.json())
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

