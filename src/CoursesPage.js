import React from "react";
import { getCourses, deleteCourse } from "./api/courseApi";
import CourseTable from "./CourseTable";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state with an empty course array.
    this.state = {
      courses: []
    };

    // Bind in constructor
    // this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    getCourses().then(courses => {
      this.setState({ courses });
    });
  }

  // Experimental class field / class property
  handleDelete = courseId => {
    deleteCourse(courseId).then(() => {
      const courses = this.state.courses.filter(
        course => course.id !== courseId
      );
      this.setState({ courses }, () => {
        alert("Course deleted");
      });
    });
  };

  render() {
    return (
      <>
        <h1>App</h1>
        <h2>Courses</h2>
        {this.state.courses.length === 0 ? (
          <p>No courses :(</p>
        ) : (
          <CourseTable
            courses={this.state.courses}
            onClickDelete={this.handleDelete}
          />
        )}
      </>
    );
  }
}

export default CoursesPage;
