import React from "react";
import CourseTable from "./CourseTable";
import renderer from "react-test-renderer";
import { courses } from "../tools/mockData";
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup } from "react-testing-library";

afterEach(cleanup);

describe("React testing library", () => {
  it("should render no courses message when no courses are passed", () => {
    // arrange
    const { getByText, debug } = render(
      <CourseTable courses={[]} onClickDelete={jest.fn()} />
    );

    // act
    // assert
    getByText("No courses.");
  });
});

it("should render courses when passed courses", () => {
  // arrange

  // act
  const tree = renderer.create(
    <Router>
      <CourseTable courses={courses} onClickDelete={jest.fn()} />
    </Router>
  );

  // assert
  expect(tree).toMatchSnapshot();
});

it("should render no courses message when passed no courses", () => {
  // arrange

  // act
  const tree = renderer.create(
    <Router>
      <CourseTable courses={[]} onClickDelete={jest.fn()} />
    </Router>
  );

  // assert
  expect(tree).toMatchSnapshot();
});
