import React, { useState } from "react";
import StarRating from "./StarRating";
import "../css/App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProfile } from "../actionCreator/deleteProfile";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const [showCardInfo, setShowCardInfo] = useState(false);
  const [currentRating, setCurrentRating] = useState(props.rating);

  const history = useHistory();

  function handleDeleteProfile(e) {
    e.preventDefault();

    console.log("Deleting Profile!", props.id);
    alert("Are you sure you want to delete this profile?");

    props.deleteProfile(props.id).then(() => history.push("/"));
  }

  return (
    <React.Fragment>
      <div className='col-md-4'>
        <div className='card'>
          <img className='card-img-top' src={props.avatar} alt=' ' />
          <div className='card-body'>
            <h5 className='card-title'>{props.name}</h5>
            <i
              onClick={() => setShowCardInfo(!showCardInfo)}
              className='fas fa-sort-down'
              style={{ cursor: "pointer", float: "left", color: "red" }}
            />
            {showCardInfo ? (
              <div>
                <p className='card-text'>Rate my profile.</p>
                <StarRating
                  profileId={props.id}
                  totalStars={5}
                  currentRating={currentRating}
                  setCurrentRating={setCurrentRating}
                />

                <Link className='nav-link' to={`/profile/${props.id}`}>
                  View my contact info{" "}
                </Link>
                <i
                  onClick={handleDeleteProfile}
                  className='fas fa-trash'
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteProfile: (profileId) => dispatch(deleteProfile(profileId)),
});

export default connect(null, mapDispatchToProps)(Card);
