import { combineReducers } from "redux";
import { contactReducer } from "./contactsReducer";

export default combineReducers({
  contact: contactReducer,
});
