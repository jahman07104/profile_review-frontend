import React, { useState } from "react";
import { render } from "react-dom";
// import './App.css';

const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const StarRating = ({ totalStars, currentRating, profileId }) => {
  const [starsSelected, selectStar] = useState(currentRating);
  
  function updateProfileRating(selectedRating) {
    console.log('calling updateProfileRating', selectedRating);
    
    const data = { star: selectedRating, profile_id: profileId }

    fetch('http://localhost:4000/ratings', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(rating => {
        selectStar(rating.star)
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