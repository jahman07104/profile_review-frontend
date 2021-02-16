import React, { useState } from "react";
import '../css/App.css';

const Star = ({ selected = false }) => (
  <div className={selected ? "star selected" : "star"} />
);

const ProfileRating = ({ totalStars, currentRating }) => {  
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < currentRating}          
        />
      ))}
      <p>
        {currentRating} of {totalStars} stars        
      </p>
    </div>
  );
};

export default ProfileRating;