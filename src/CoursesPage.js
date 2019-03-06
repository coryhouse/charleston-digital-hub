import React, { useState } from "react";
import PropTypes from "prop-types";
import CourseTable from "./CourseTable";
import { Redirect } from "react-router-dom";
import { course } from "./propTypes";

function CoursesPage(props) {
  const [redirectToAddCourse, setRedirectToAddCourse] = useState(false);

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

export default CoursesPage;
