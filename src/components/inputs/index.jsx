import React from "react";

class Inputs extends React.Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthday: "",
    gender: "",
    agree: false,
    skills: [],
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCheckbox = (event) => {
    this.setState({
      agree: event.target.checked,
    });
  };

  handleSkillChange = (event) => {
    if (event.target.checked) {
      this.setState({
        skills: [...this.state.skills, event.target.value],
      });
    } else {
      const skills = this.state.skills.filter(
        (skill) => skill !== event.target.value
      );
      this.setState({ skills });
    }
  };

  render() {
    const { name, country, bio, birthday, agree, skills } = this.state;
    return (
      <div className>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChange}
        />
        <select
          className="form-control"
          name="country"
          value={country}
          onChange={this.handleChange}
        >
          <option value="">Select country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Srilanka">Srilanka</option>
          <option value="China">China</option>
        </select>
        <textarea
          className="form-control"
          name="bio"
          placeholder="Describe yourself"
          value={bio}
          onChange={this.handleChange}
        ></textarea>
        <input
          className="form-control"
          type="date"
          name="birthday"
          value={birthday}
          onChange={this.handleChange}
        />
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={this.handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={this.handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={this.handleChange}
          />
          Other
        </div>

        <div>
          skills <br />
          <input
            type="checkbox"
            name="skills"
            value="Java"
            checked={skills.includes("Java")}
            onChange={this.handleSkillChange}
          />
          Java
          <input
            type="checkbox"
            name="skills"
            value="Javascript"
            checked={skills.includes("Javascript")}
            onChange={this.handleSkillChange}
          />
          Javascript
          <input
            type="checkbox"
            name="skills"
            value="Python"
            checked={skills.includes("Python")}
            onChange={this.handleSkillChange}
          />
          python
          <input
            type="checkbox"
            name="skills"
            value="HTML"
            checked={skills.includes("HTML")}
            onChange={this.handleSkillChange}
          />
          HTML
          <input
            type="checkbox"
            name="skills"
            value="Bootstrap"
            checked={skills.includes("Bootstrap")}
            onChange={this.handleSkillChange}
          />
          Bootstrap
          <input
            type="checkbox"
            name="skills"
            value="React"
            checked={skills.includes("React")}
            onChange={this.handleSkillChange}
          />
          React
        </div>
        <div>
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={this.handleCheckbox}
          />
          I agree to all the terms.
        </div>

        <button className="btn" onClick={() => console.log(this.state)}>
          Show data
        </button>
      </div>
    );
  }
}

export default Inputs;
