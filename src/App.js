import "./css/App.css";

// component
import Header from "./component/Header.js";
import Main from "./component/Main.js";
import Theme from "./component/Theme";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Theme />
        <Main />
      </div>
    );
  }
}

export default App;
