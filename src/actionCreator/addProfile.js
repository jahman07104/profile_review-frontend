export const addProfile = (data) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
    return fetch("http://localhost:4000/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((profile) => {
        console.log('d')
        dispatch({ type: "ADD_PROFILE", payload: profile });
      });
    console.log('e')
  }
  console.log('f')
};
