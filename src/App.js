import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import Nav from "./Nav";
import ManageCoursePage from "./ManageCoursePage";
import PageNotFound from "./PageNotFound";
import { getCourses, deleteCourse, saveCourse } from "./api/courseApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  state = {
    courses: []
  };

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

  handleSave = course => {
    return saveCourse(course).then(savedCourse => {
      toast.success("🦄Course saved!");
      let courses;
      if (course.id) {
        // okay, i must be editing because the ID is populated
        courses = this.state.courses.map(c => {
          if (c.id === course.id) {
            // so this is the course that was just saved
            return savedCourse;
          } else {
            return c;
          }
        });
      } else {
        // update the state array to contain the new course
        courses = [...this.state.courses, savedCourse];
      }
      this.setState({ courses });
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route
            path="/courses"
            render={props => (
              <CoursesPage
                {...props}
                courses={this.state.courses}
                onDelete={this.handleDelete}
              />
            )}
          />
          <Route
            path="/course/:slug"
            render={props => (
              <ManageCoursePage
                {...props}
                courses={this.state.courses}
                onSave={this.handleSave}
              />
            )}
          />
          <Route
            path="/course/"
            render={props => (
              <ManageCoursePage
                {...props}
                courses={this.state.courses}
                onSave={this.handleSave}
              />
            )}
          />
          <Route path="/404" component={PageNotFound} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer hideProgressBar />
      </div>
    );
  }
}

export default App;
