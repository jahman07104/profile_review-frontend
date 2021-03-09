export const deleteProfile = (profileId) => {
  return (dispatch) =>
    fetch(`http://localhost:4000/profiles/${profileId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((profile) => {
        dispatch({ type: "DELETE_PROFILE", payload: profile.id });
      });
};
