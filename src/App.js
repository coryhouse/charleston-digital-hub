import React from "react";
import { getCourses, deleteCourse } from "./api/courseApi";

class App extends React.Component {
  constructor(props) {
    super(props);
    //test

    // Initialize state with an empty course array.
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    getCourses().then(courses => {
      this.setState({ courses });
    });
  }

  handleDelete(courseId) {
    deleteCourse(courseId).then(() => {
      const courses = this.state.courses.filter(
        course => course.id !== courseId
      );
      this.setState({ courses }, () => {
        alert("Course deleted");
      });
    });
  }

  render() {
    return (
      <>
        <h1>App</h1>
        <h2>Courses</h2>
        <table>
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(course => (
              <tr key={course.id}>
                <td>
                  <button onClick={event => this.handleDelete(course.id)}>
                    Delete
                  </button>
                </td>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
