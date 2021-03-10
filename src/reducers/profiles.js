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
      return {
        ...state,
        profiles: state.profiles.filter((profile) => {
          if (profile.id !== action.payload) {
            return profile;
          }
        }),
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        profiles: state.profiles.map((profile) => {
          if (profile.id === action.payload.id) {
            return action.payload;
          } else {
            return profile;
          }
        }),
      };
    default:
      return state;
  }
}
