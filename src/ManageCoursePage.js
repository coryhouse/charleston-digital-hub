import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import { saveCourse } from "./api/courseApi";

class ManageCoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        id: null,
        title: "",
        category: "",
        slug: "",
        authorId: ""
      },
      errors: {}
    };
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  handleChange = event => {
    const course = { ...this.state.course };
    // computed property syntax
    course[event.target.name] = event.target.value;
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    const errors = {};

    if (!this.state.course.title) errors.title = "Title is required.";
    if (!this.state.course.category) errors.category = "Category is required.";
    if (!this.state.course.authorId) errors.authorId = "Author is required.";

    // Is there at least one property on the errors object? If so, validation failed.
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    saveCourse(this.state.course).then(() => {
      this.props.history.push("/courses");
    });
  };

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            label="Title"
            id="title"
            name="title"
            onChange={this.handleChange}
            value={this.state.course.title}
            error={this.state.errors.title}
          />

          <TextInput
            label="Category"
            id="category"
            name="category"
            onChange={this.handleChange}
            value={this.state.course.category}
            error={this.state.errors.category}
          />

          <TextInput
            label="Author"
            id="author"
            name="authorId"
            onChange={this.handleChange}
            value={this.state.course.authorId}
            error={this.state.errors.authorId}
          />

          <button type="submit">Save Course</button>
        </form>
      </div>
    );
  }
}

export default ManageCoursePage;
