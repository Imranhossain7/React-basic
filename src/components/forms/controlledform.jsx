import React from "react";

class ControlledForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handelChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    event.target.reset();
    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={this.handelChange}
          />
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={this.handelChange}
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="*****"
            value={password}
            onChange={this.handelChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ControlledForm;
