import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CourseTable from "./CourseTable";
import { Redirect } from "react-router-dom";
import { course } from "./propTypes";
import { connect } from "react-redux";
import * as courseActions from "./redux/actions/courseActions";

function CoursesPage(props) {
  const [redirectToAddCourse, setRedirectToAddCourse] = useState(false);

  useEffect(() => {
    props.dispatch(courseActions.loadCourses());
  }, []);

  function handleClickAddCourse() {
    setRedirectToAddCourse(true);
  }

  return (
    <>
      {redirectToAddCourse && <Redirect to="/course" />}
      <h1>Courses</h1>
      <button onClick={handleClickAddCourse}>Add Course</button>
      {props.courses.length === 0 ? (
        <p>No courses :(</p>
      ) : (
        <CourseTable courses={props.courses} onClickDelete={props.onDelete} />
      )}
    </>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.arrayOf(course).isRequired,
  onDelete: PropTypes.func.isRequired
};

// This says: Pass the courses data from the Redux store to this component as props.courses.
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

// Connect this component to the redux store and make the data we've specified in mapStateToProps available via props.
export default connect(mapStateToProps)(CoursesPage);
