import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

// Action creator
function loadCoursesSuccess(courses) {
  // Action
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

// Our first thunk. We'll call this from our React component
export function loadCourses() {
  return function(dispatch) {
    return courseApi.getCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    });
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    });
  };
}
