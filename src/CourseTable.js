import React, { Component } from "react";
import PropTypes from "prop-types";
import { course } from "./propTypes";

class CourseTable extends Component {
  render() {
    return (
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
          {this.props.courses.map(course => (
            <tr key={course.id}>
              <td>
                <button onClick={event => this.props.onClickDelete(course.id)}>
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
    );
  }
}

CourseTable.propTypes = {
  courses: PropTypes.arrayOf(course).isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default CourseTable;
