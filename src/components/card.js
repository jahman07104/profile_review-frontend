import React, { useState } from "react";
import Rating from '../components/Rating';

const Card = (props) => {
  const avatar = `https://i.pravatar.cc/150?img=${props.avatarId}`;

  const [showCardInfo, setShowCardInfo] = useState(false);

  // useEffect hook to get the person rating from the backedn api, set teh rsting value in state
  //

  return (
    <React.Fragment>
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={avatar} alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
              <i onClick={() => setShowCardInfo(!showCardInfo)}  
                className="fas fa-sort-down" 
                style={{cursor: 'pointer'}}
              />
              {
                showCardInfo ? (
                  <div>
                    <p className="card-text">give your rating for this profile.</p>
                    <Rating  />
                    <a href="#" class="btn btn-primary">{props.email}{props.phone}</a>
                    {/* <a href="#" class="btn btn-primary">Display rating from state here</a> */}
                   
                  
                    

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