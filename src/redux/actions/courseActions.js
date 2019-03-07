import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

// Action creator
function loadCoursesSuccess(courses) {
  // Action
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

// Our first thunk. We'll call this from our React component
export function loadCourses() {
  return function(dispatch) {
    return courseApi.getCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    });
  };
}
