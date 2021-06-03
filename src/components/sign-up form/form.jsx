import React from "react";
import TextInput from "./textinput";
import PropTypes, { bool } from "prop-types";

const Form = ({
  values,
  agreement,
  errors,
  handleChange,
  handleAgreement,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name="name"
        label="Name"
        placeholder="Enter your name"
        value={values.name}
        error={errors.name}
        onChange={handleChange}
      />
      <TextInput
        name="email"
        type="email"
        label="Email"
        placeholder="abc@gmail.com"
        value={values.email}
        error={errors.email}
        onChange={handleChange}
      />
      <TextInput
        name="password"
        type="password"
        label="Password"
        placeholder="*****"
        value={values.password}
        error={errors.password}
        onChange={handleChange}
      />
      <TextInput
        name="birthDate"
        type="date"
        label="BirthDate"
        placeholder=""
        value={values.birthDate}
        error={errors.birthDate}
        onChange={handleChange}
      />
      <div className="form-group">
        <label className="mr-4">
          <input
            className="form-control mr-2"
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          Male
        </label>
        <label className="mr-4">
          <input
            className="form-control mr-2"
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          Female
        </label>
        <label className="mr-4">
          <input
            className="form-control mr-2"
            type="radio"
            name="gender"
            value="Other"
            onChange={handleChange}
          />
          Other
        </label>
        {errors.gender && (
          <div className="invalid-feedback">{errors.gender}</div>
        )}
      </div>

      <div className="form-group">
        <label className="mr-4">
          <input
            className="form-control mr-2"
            type="checkbox"
            name="agreement"
            checked={agreement}
            onChange={handleAgreement}
          />
          I agree.
        </label>
      </div>

      <button className="btn btn-primary" type="submit" disabled={!agreement}>
        Create User
      </button>
    </form>
  );
};
Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAgreement: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default Form;
