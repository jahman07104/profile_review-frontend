const initialState = {
  profiles: [],
};

export default function profiles(state = initialState, action) {
  console.log(`state inside profiles reducer`, JSON.stringify(state));
  switch (action.type) {
    case "SET_PROFILES":
      return { ...state, profiles: action.payload };
    case "ADD_PROFILE":
      return { ...state, profiles: [...state.profiles, action.payload] };
    case "DELETE_PROFILE":
      const updatedProfiles = state.profiles.filter((profile) => {
        if (profile.id !== action.payload) {
          return profile;
        }
      });
      return { ...state, profiles: updatedProfiles };
    case "UPDATE_PROFILE":
      const newProfiles = state.profiles.map((profile) => {
        if (profile.id === action.payload.id) {
          console.log(
            "updating profile in redux store",
            JSON.stringify(action.payload)
          );
          return action.payload;
        } else {
          return profile;
        }
      });
      console.log("newProfiles", JSON.stringify(newProfiles));
      return { ...state, profiles: newProfiles };
    default:
      return state;
  }
}
