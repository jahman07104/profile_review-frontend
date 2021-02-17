import React from 'react';
import Navbar from './Navbar';
import Footer from'./Footer';

const AboutThisApp = () => {
  return ( 
    <>
      <div className="container">
        <Navbar title="Profile viewer" icon="fab fa-forumbee"/>  
          <h1>  About This App </h1>
        <div class="row">
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