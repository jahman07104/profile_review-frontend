import React, { useEffect } from "react";
import Card from "../components/card";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { setProfiles, getProfiles } from "../actionCreator/setProfiles";
import store from "../store";

const Home = (props) => {
  console.log(`props.profiles`, JSON.stringify(props.profiles.profiles));
  useEffect(() => {
    store.dispatch(getProfiles());
  }, []);

  const updateProfiles = (deletedProfileId) => {
    const updatedProfiles = props.profiles.profiles.filter((profile) => {
      if (profile.id !== deletedProfileId) {
        return profile;
      }
    });
    store.dispatch(setProfiles(updatedProfiles));
  };

  const profileItems = props.profiles.profiles.map((profile, index) => {
    return (
      <Card
        updateProfiles={updateProfiles}
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
      <div className='row'>{profileItems}</div>
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

const mapDispatchToProps = (dispatch) => ({
  setProfiles: (profiles) => dispatch(setProfiles(profiles)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
