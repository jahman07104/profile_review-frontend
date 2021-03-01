import React, { useState } from "react";
import '../css/App.css';

const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const StarRating = ({ totalStars, currentRating, setCurrentRating, profileId }) => {
  const [starsSelected, selectStar] = useState(currentRating);

  function updateProfileRating(selectedRating) {
  const data = { rating: selectedRating, profile_id: profileId }
    fetch(`http://localhost:4000/profiles/${profileId}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(profile => {
        selectStar(profile.rating);
        setCurrentRating(profile.rating);
      })
  }

  return (
    <div className="star-rating">
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

export default StarRating;