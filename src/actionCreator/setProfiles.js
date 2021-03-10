export const getProfiles = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/profiles")
      .then((res) => res.json())
      .then((profiles) => {
        console.log(profiles)
        dispatch(setProfiles(profiles));
      });
  };
};

export const setProfiles = (profiles) => {
  return { type: "SET_PROFILES", payload: profiles };
};
