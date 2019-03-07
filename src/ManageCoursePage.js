import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { connect } from "react-redux";
import * as courseActions from "./redux/actions/courseActions";

function ManageCoursePage(props) {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    category: "",
    slug: "",
    authorId: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    props.dispatch(courseActions.loadCourses());
  }, []);

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug && props.courses.length > 0) {
      // So we're editing an existing course
      const course = props.courses.find(course => course.slug === slug);
      if (!course) props.history.push("/404");
      setCourse({ ...course });
    }
  }, [props.courses]); // Empty dependency array means this will run only once, when component mounts.

  const handleChange = event => {
    const _course = { ...course };
    // computed property syntax
    _course[event.target.name] = event.target.value;
    setCourse(_course);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const _errors = {};

    if (!course.title) _errors.title = "Title is required.";
    if (!course.category) _errors.category = "Category is required.";
    if (!course.authorId || isNaN(course.authorId))
      _errors.authorId = "Author ID must be a number.";

    // Is there at least one property on the errors object? If so, validation failed.
    if (Object.keys(_errors).length > 0) {
      setErrors(_errors);
      return;
    }

    const newCourse = {
      ...course,
      authorId: parseInt(course.authorId, 10)
    };

    props
      .onSave(newCourse)
      .then(() => {
        toast.success("🦄Course saved!");
        props.history.push("/courses");
      })
      .catch(error => {
        toast.error("Oops! Save failed. Please try again.  ¯\\_(ツ)_/¯");
      });
  };

  if (props.courses.length === 0) return <Spinner />;
  return (
    <div>
      <h1>Manage Course</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Title"
          id="title"
          name="title"
          onChange={handleChange}
          value={course.title}
          error={errors.title}
        />

        <TextInput
          label="Category"
          id="category"
          name="category"
          onChange={handleChange}
          value={course.category}
          error={errors.category}
        />

        <TextInput
          label="Author"
          id="author"
          name="authorId"
          onChange={handleChange}
          value={course.authorId}
          error={errors.authorId}
        />

        <button type="submit">Save Course</button>
      </form>
    </div>
  );
}

ManageCoursePage.propTypes = {
  history: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(ManageCoursePage);
