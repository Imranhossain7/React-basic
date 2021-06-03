import React from "react";
import Signup from "./sign-up form";
/* import SplitForm from "./split-form"; */

class App extends React.Component {

  state = {
    users = []
  }

  createUser = (user) => {
    user.id = new Date().getTime().toString()
    this.setState ({
      users : [ ...this.state.users,user]
    })
  }
  render() {
    return ( 
      <div>
        <h1> Sign up forms in React</h1>
        <br />
        {/*   <Inputs /> */}
        {/* <SplitForm /> */}
        <Signup
        createUser = {this.createUser}
        
        />
<div>
  <h3 className='my-5'> All registered users</h3>

  <ul className='list'>
    {this.state.users.map(user =>  (
      <li key={user.id} className='list-group-item'>
        {user.name} → {user.email}
      </li>
    ) )}

  </ul>
</div>

      </div>
    );
  }
}

export default App;

/* --Till data binding ,lecture 7-- 
import Profile from "./profile";
import Bio from "./profile/bio";
import Skill from "./profile/skill";

class App extends Component {
  state = {
    name: "",
  };

  handleButtonclick = (event) => {
    console.log(event.target);
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleFocus = (event) => {
    console.log("I am focus event");
  };

  handleBlur = (event) => {
    if (!this.state.name) {
      alert("Please enter your name");
    }
    console.log("i am blur event");
  }; */

/* 
  ---- State example ----  
  state = {
    count: 0,
  };

  intervalId = null;

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  startTimer = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Timer finished");
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalId);
    this.intervalId = null;
  }; */

/* render() {
    return (
      <div className="App">
        <Profile />
        <Bio name="Shakil SIddque" title="Designer and Developer" />

        <Skill skillA="Reactjs" skillB="Javascript" skillC="HTML5" />

        <Bio name="Tanvir Nayem" title="Backend developer" />

        <Skill skillA="Node js" skillB="Python" skillC="Php" /> */

{
  /*  
                 <Myprops name='Imran Hossain'/>
                 <Myprops name='Shakil Siddque'/>
                 <Myprops name='Tanvir Nayem'/>
            </div> */
}

{
  /* 
        
        --- State work process ---
        <h1>Count = {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState(
              (prev) => {
                return {
                  count: prev.count + 1,
                };
              },
              () => {
                console.log("Clicked....", this.state.count);
              }
            );
          }}
        >
          ADD +1
        </button>

        <h1 className="Heading">Simple Timer</h1>
        <div className="Container-2">
          <button className="Btn" onClick={this.decrementCount}>
            {" "}
            -{" "}
          </button>
          <span className="text">{this.state.count}</span>
          <button className="Btn" onClick={this.incrementCount}>
            {" "}
            +{" "}
          </button>
        </div>
        <div className="Container-2">
          <button onClick={this.startTimer} className="Btn">
            Start
          </button>
          <button onClick={this.stopTimer} className="Btn">
            Stop
          </button>
          <button onClick={this.resetTimer} className="Btn">
            Reset
          </button>
        </div> */
}

{
  /* <div className="Container-2">
          <h1 className="Info">Event in React</h1>
          <button className="Btn" onClick={this.handleButtonclick}>
            Click me
          </button>

          <br />
          <input
            type="text"
            className="text"
            placeholder="Enter some text"
            value={this.state.name}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />

          <br />
          <br />
          {this.state.name && <h3> Welcome , {this.state.name}</h3>}
        </div>
      </div>
    );
  }
}
 */
}
