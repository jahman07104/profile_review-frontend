import { combineReducers } from "redux";
import addProfile from "./addProfile";
import profiles from "./profiles";

export default combineReducers({
  profiles: profiles,
  addProfile: addProfile,
});
