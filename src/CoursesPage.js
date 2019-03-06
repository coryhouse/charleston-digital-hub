import React from "react";
import PropTypes from "prop-types";
import CourseTable from "./CourseTable";
import { Redirect } from "react-router-dom";
import { course } from "./propTypes";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state with an empty course array.
    this.state = {
      redirectToAddCourse: false
    };

    // Bind in constructor
    // this.handleDelete = this.handleDelete.bind(this);
  }

  handleClickAddCourse = () => {
    this.setState({ redirectToAddCourse: true });
  };

  render() {
    return (
      <>
        {this.state.redirectToAddCourse && <Redirect to="/course" />}
        <h1>Courses</h1>
        <button onClick={this.handleClickAddCourse}>Add Course</button>
        {this.props.courses.length === 0 ? (
          <p>No courses :(</p>
        ) : (
          <CourseTable
            courses={this.props.courses}
            onClickDelete={this.props.onDelete}
          />
        )}
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.arrayOf(course).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CoursesPage;
