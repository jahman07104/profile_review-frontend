export const updateProfile = (data) => {
  return (dispatch) =>
    fetch(`http://localhost:4000/profiles/${data.profile_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((profile) => {
        console.log(
          "profile updated back from backend",
          JSON.stringify(profile)
        );
        dispatch({ type: "UPDATE_PROFILE", payload: profile });
      });
};
