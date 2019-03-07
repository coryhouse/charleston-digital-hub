import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
import CourseTable from "../src/CourseTable";
import { BrowserRouter as Router } from "react-router-dom";
import { courses } from "../tools/mockData";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("CourseTable", module)
  .add("no courses", () => (
    <Router>
      <CourseTable courses={[]} onDeleteClick={() => {}} />
    </Router>
  ))
  .add("with courses", () => (
    <Router>
      <CourseTable courses={courses} onDeleteClick={() => {}} />
    </Router>
  ));
