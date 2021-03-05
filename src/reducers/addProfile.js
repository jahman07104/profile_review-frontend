const initialState = {
  profiles: [],
};

export default function addProfile(state = initialState, action) {
  switch (action.type) {
    case "ADD_PROFILE":
      return { ...state, profiles: [...state.profiles, action.payload] };
    default:
      return state;
  }
}
