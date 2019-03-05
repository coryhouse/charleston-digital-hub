import React from "react";
import PropTypes from "prop-types";
import { course } from "./propTypes";

const CourseTable = ({ courses, onClickDelete }) => {
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
        {courses.map(course => (
          <tr key={course.id}>
            <td>
              <button onClick={event => onClickDelete(course.id)}>
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
};

CourseTable.propTypes = {
  courses: PropTypes.arrayOf(course),
  onClickDelete: PropTypes.func.isRequired
};

CourseTable.defaultProps = {
  courses: []
};

export default CourseTable;
