const initialState = {
  profiles: [],
};

export default function profiles(state = initialState, action) {
  switch (action.type) {
    case "SET_PROFILES":
      return { ...state, profiles: action.payload };
    case "ADD_PROFILE":
      return { ...state, profiles: [...state.profiles, action.payload] };
    case "DELETE_PROFILE":
      return {
        ...state,
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
