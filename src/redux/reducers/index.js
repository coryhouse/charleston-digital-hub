import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  // Note that this name determines how you access the data in mapStateToProps
  // This name determines the object name in the redux store
  courses
});

export default rootReducer;
