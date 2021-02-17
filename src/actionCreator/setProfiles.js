export const getProfiles = () => {  
   return (dispatch) => {    
    fetch("http://localhost:4000/profiles")
    .then((res) => res.json())
    .then(profiles => {
      console.log(`Thunk got api data: ${JSON.stringify(profiles)}`)
      dispatch(setProfiles(profiles));
    })
   }
 }

export function setProfiles(profiles) {
  return { type: "SET_PROFILES", payload: profiles };
}