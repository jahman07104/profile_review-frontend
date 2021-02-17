import React from "react";
import ProfileRating from './ProfileRating';
import '../css/App.css'
import { Link } from "react-router-dom";

const ProfileCard = (props) => {
  console.log(`props, ${JSON.stringify(props)}`);
  console.log(props.rating);
  return (    
      <div className="col-md-4" align-center>
        <div className="card" >
          <img className="card-img-top" src={props.avatar} alt="Card image cap"/>
            <div>
            <h5 className="card-title">{props.name}</h5>
            <div>              
              <ProfileRating                 
                totalStars={5}
                currentRating={props.rating}                
              />
              <ol>Name: {props.name}</ol>
              <ol>City: {props.city}</ol>
              <ol>Email: {props.email}</ol>
              <ol>Phone: {props.phone}</ol>
            </div>
          </div>
        </div>
      </div>         
  );
}

export default ProfileCard;