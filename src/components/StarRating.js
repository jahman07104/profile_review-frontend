import React, { useState } from "react";
import "../css/App.css";
import { updateProfile } from "../actionCreator/updateProfile";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const StarRating = ({
  totalStars,
  currentRating,
  setCurrentRating,
  profileId,
  updateProfile,
  profiles,
}) => {
  const [starsSelected, selectStar] = useState(currentRating);
  const history = useHistory();

  function updateProfileRating(selectedRating) {
    const data = { rating: selectedRating, profile_id: profileId };
    updateProfile(data).then(() => {
      const updatedProfile = profiles.profiles.find((profile) => {
        if (profile.id === profileId) {
          return profile;
        } else {
          return null;
        }
      });
      history.push("/");
      selectStar(updatedProfile.rating);
      setCurrentRating(updatedProfile.rating);
    });
  }

  return (
    <div className='star-rating'>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => updateProfileRating(i + 1)}
        />
      ))}
      <p>
        {starsSelected} of {totalStars} stars
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (data) => dispatch(updateProfile(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StarRating);
