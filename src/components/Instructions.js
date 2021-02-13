import React,{ useState }from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import AddProfile from "./AddProfile";
import '../css/App.css';

function Instructions() {
  const [showProfileForm, setShowProfileForm] = useState(true);

    return (    
      <div className="container">
      <Navbar title="profile viewer" icon="fab fa-forumbee"/>               
        <div style={{ borderTop: "2px solid #fff ", marginLeft: 4, marginRight: 4 }}></div>
        <AddProfile showProfileForm={showProfileForm} setShowProfileForm={setShowProfileForm} />
      <Footer year={new Date().getFullYear()}/>
      </div>
    );
}

export default Instructions;