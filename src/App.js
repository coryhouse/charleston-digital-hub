import React from "react";
import { getCourses } from "./api/courseApi";

class App extends React.Component {
  constructor(props) {
    super(props);

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

  render() {
    return (
      <>
        <h1>App</h1>
        <h2>Courses</h2>
        <table>
          <thead>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </thead>
          <tbody>
            {this.state.courses.map(course => (
              <tr>
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
