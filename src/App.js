import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import Nav from "./Nav";
import ManageCoursePage from "./ManageCoursePage";
import PageNotFound from "./PageNotFound";
import { getCourses } from "./api/courseApi";
import { ToastContainer } from "react-toastify";
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

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/course/:slug" component={ManageCoursePage} />
          <Route path="/course/" component={ManageCoursePage} />
          <Route path="/404" component={PageNotFound} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer hideProgressBar />
      </div>
    );
  }
}

export default App;
