import { combineReducers } from "redux";
import addProfile from "./addProfile";
import deleteProfile from "./deleteProfile";
import profiles from "./profiles";

export default combineReducers({
  profiles: profiles,
  addProfile: addProfile,
  deleteProfile: deleteProfile
});
