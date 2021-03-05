const initialState = {
  profiles: [],
};

export default function profiles(state = initialState, action) {
  console.log(`state inside profiles reducer`, JSON.stringify(state));
  switch (action.type) {
    case "SET_PROFILES":
      return { ...state, profiles: action.payload };
    default:
      return state;
  }
}
