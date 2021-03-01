import React from 'react';
import Navbar from './Navbar';
import Footer from'./Footer';

const AboutThisApp = () => {
  return ( 
    <>
      <div className="container">
        <Navbar title="Profile viewer" icon="fab fa-forumbee"/>  
          <h1>  About This App </h1>
        <div className="row">
          <p>The Profile Viewer is an application that is written for people who want to expose themselves to an audience for 
            everthing from romantic hook-ups to talent agencies who are looking for models.They present their head shot pictures to be viewed and rated and if the 
            viewer is interested their contact info is just a click away.</p>
          <p>
            The App gives the Viewer the ability to give each profile a rating using a star system from one star to five stars. The 
            viewer can get detailed look at the profile for contact info. The viewer also has the ability to upload their own profile
            or the profile of another person if they so choose.
            They simply need to visit the instructions page fill out the form and upload their info.
            The viewer can also delete a profile by clicking the garbage can on the ratings page.  
          </p>
        </div>
        <br></br>
        <div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}>
        </div>
        < Footer year={new Date().getFullYear()}/>
      </div>
    </>
);

}
export default AboutThisApp;