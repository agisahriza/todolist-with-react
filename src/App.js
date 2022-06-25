import "./css/App.css";

// component
import Header from "./component/Header.js";
import Main from "./component/Main.js";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: ["dark", "dark2"],
    };
  }

  changeDark = () => {
    this.setState({ theme: ["dark", "dark2"] });
    document.body.style.backgroundColor = "#22252d";
  };

  changeLight = () => {
    this.setState({ theme: ["light", "light2"] });
    document.body.style.backgroundColor = "#f9f9f9";
  };

  render() {
    const theme = this.state.theme;
    return (
      <div className="App">
        <Header theme={theme} />
        <div className={`theme ${this.state.theme[0]}`}>
          <span
            className={`material-icons-outlined light-icon ${theme[0]}`}
            onClick={() => {
              this.changeLight();
            }}
          >
            {" "}
            wb_sunny{" "}
          </span>

          <span
            className={`material-icons-outlined dark-icon ${theme[0]}`}
            onClick={() => {
              this.changeDark();
            }}
          >
            {" "}
            dark_mode{" "}
          </span>
          <i className="fa-light fa-moon"></i>
        </div>
        <Main theme={theme} />
      </div>
    );
  }
}

export default App;
