import React from "react";
import { PropTypes } from "prop-types";

const TextInput = ({ id, name, value, label, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        id={id}
        type="text"
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
