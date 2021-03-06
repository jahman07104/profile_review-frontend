export const deleteProfile = (profileId) => {
  return (dispatch) => fetch(`http://localhost:4000/profiles/${props.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }      
    })
      .then(response => response.json())
      .then(profile => {                    
          props.updateProfiles(profile.id);
        dispatch({ type: "DELETE_PROFILE", payload: profileId });
      })
      console.log('Deleting Profile!', props.id);
  }
 
  // };