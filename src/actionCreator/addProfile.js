export const addProfile = (data) => {

  return (dispatch) => fetch("http://localhost:4000/profiles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((profile) => {
      dispatch({ type: "ADD_PROFILE", payload: profile });
     

    })
  
};


