import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";

const App = () => {
  return (
    <div>
      <Route path="/" component={HomePage} exact />
      <Route path="/courses" component={CoursesPage} />
    </div>
  );
};

export default App;
