import React, { useState } from "react";
import Rating from '../components/Rating';
import StarRating from './StarRating';
import '../css/App.css'

const Card = (props) => {
  // const avatar = `https://i.pravatar.cc/150?img=${props.avatarId}`;

  const [showCardInfo, setShowCardInfo] = useState(false);
  const [currentRating, setCurrentRating] = useState(props.rating);

  // useEffect hook to get the person rating from the backedn api, set teh rsting value in state
  //

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
          console.log(`Deleted profile id ${profile.id} successfully!`);
          props.updateProfiles(profile.id);
      })    
  }

  return (
    <React.Fragment>
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={props.avatar} alt="Card image cap" />
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
                    <p className="card-text">give your rating for this profile.</p>
                    <StarRating 
                      profileId={props.id}
                      totalStars={5}
                      currentRating={currentRating}
                      setCurrentRating={setCurrentRating}
                    />
                    <a href="#" class="btn btn-primary">{props.email}{props.phone}</a>
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