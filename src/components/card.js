import React, { useState } from "react";
import StarRating from './StarRating';
import '../css/App.css'
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { setProfiles } from "../actionCreator/setProfiles";
import store from "../store";
const Card = (props) => {
  const [showCardInfo, setShowCardInfo] = useState(false);
  const [currentRating, setCurrentRating] = useState(props.rating);
  // const handleClick = () => {
  // }

  const deleteProfile = () => {
    console.log('Deleting Profile!', props.id);
    fetch(`http://localhost:4000/profiles/${props.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }      
    })
      .then(response => response.json())
      .then(profile => {                    
          props.updateProfiles(profile.id);
      })
  }

  return (
    <React.Fragment>
      <div className="col-md-4">
        <div className="card">        
          <img className="card-img-top" src={props.avatar} alt=" " />
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
              <i onClick={() => setShowCardInfo(!showCardInfo)}  
                className="fas fa-sort-down" 
                style={{cursor: 'pointer', float:
                'left', color: 'red' }}
                />
          {
                showCardInfo ? (
                  <div>
                    <p className="card-text">Rate my profile.</p>
                    <StarRating 
                      profileId={props.id}
                      totalStars={5}
                      currentRating={currentRating}
                      setCurrentRating={setCurrentRating}
                    />

                    <Link className="nav-link" to={`/profile/${props.id}`}>View my contact info </Link>      
                    <i onClick={deleteProfile}
                      className="fas fa-trash" 
                      style={{cursor: 'pointer', float:
                      'right', color: 'red' }}
                    />                                             
                  </div>
                )
                : null
              }
            </div>
          </div>
      </div>    
    </React.Fragment>       
  );
}

export default Card;