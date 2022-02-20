import React from "react";
import "./main.css";
import { FaMoon, FaSun } from "react-icons/fa";

class Navbar extends React.Component {
  state = {
    mode: "light",
  };

  handleMode = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.value === "light") {
      this.setState({
        mode: "light",
      });
    } else if (document.body.classList.value === "light dark") {
      this.setState({ mode: "dark" });
    }
  };

  render() {
    return (
      <div className="nav-bar">
        <div className="box">
          <div className="nav-text">
            <h3>where in the world</h3>
          </div>
          <div className="mode" id="mode" onClick={this.handleMode}>
            {this.state.mode === "light" ? (
              <div className="light-mode">
                <FaMoon /> <span>light mode</span>
              </div>
            ) : (
              <div className="dark-mode">
                <FaSun /> <span>dark mode</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
