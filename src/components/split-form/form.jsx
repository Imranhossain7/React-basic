import React from "react";
import PropTypes from "prop-types";
import TextInput from "./textinput";

const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <TextInput
      name="name"
      label="Enter your name"
      placeholder="abc"
      value={props.values.name}
      onChange={props.handleChange}
    />
    <TextInput
      name="email"
      type="email"
      label="Enter email"
      placeholder="abc@gmail.com"
      value={props.values.email}
      onChange={props.handleChange}
    />
    <TextInput
      name="password"
      label="Put password"
      placeholder="*****"
      value={props.values.password}
      onChange={props.handleChange}
    />
    <button type="submit">Submit</button>
  </form>
);

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
