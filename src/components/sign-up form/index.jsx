import React from "react";
import PropTypes from "prop-types";
import Form from "./form";

const initValues = {
  name: "",
  email: "",
  password: "",
  birthDate: "",
  gender: "",
};

class Signup extends React.Component {
  state = {
    values: initValues,
    agreement: false,
    errors: "",
  };

  handleChange = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAgreement = (event) => {
    this.setState({
      agreement: event.target.checked,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { isValid, errors } = this.validate();
    if (isValid) {
      this.props.createUser(this.state.values);

      event.target.reset();
      this.setState({ values: initValues, agreement: false, errors: {} });
    } else {
      this.setState({ errors });
    }
  };

  validate = () => {
    const errors = {};
    const {
      values: { name, email, gender, password, birthDate },
    } = this.state;

    if (!name) {
      errors.name = "Please enter name";
    }
    if (!email) {
      errors.email = "Please enter valid email";
    }
    if (!password) {
      errors.password = "Please enter a password";
    }
    if (!birthDate) {
      errors.birthDate = "Please enter your birthdate";
    }
    if (!gender) {
      errors.gender = "Please select your gender";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  render() {
    return (
      <div>
        <h1> SIgn Up Forms</h1>
        <Form
          values={this.state.values}
          agreement={this.state.agreement}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleAgreement={this.handleAgreement}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

Signup.protoType = {
  createUser: PropTypes.func.isRequired,
};
export default Signup;
