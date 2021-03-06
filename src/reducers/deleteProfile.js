const initialState = {
    profiles: [],
};
export default function deleteProfile(state = initialState, action) {
    console.log('state inside delete profile reducer')
    switch (action.type) {
    case "DELETE_PROFILE":
        return { ...state, profiles: [...state.profiles, action.payload] };
    default:
        return state;
    }
}