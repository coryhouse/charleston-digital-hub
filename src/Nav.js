import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";

const Nav = () => {
  const user = useContext(UserContext);
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/courses">Courses</NavLink>
      </li>
      <li>
        Hi {user.name}, I see you're a {user.role}.{" "}
        <button onClick={user.makeAdmin}>Make me an admin!</button>
      </li>
    </ul>
  );
};

export default Nav;
