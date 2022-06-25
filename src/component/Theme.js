import React from "react";

class Theme extends React.Component {
  render() {
    return (
      <div className="theme">
        <span className="material-icons-outlined light"> wb_sunny </span>
        <span className="material-icons-outlined dark active"> dark_mode </span>
        <i className="fa-light fa-moon"></i>
      </div>
    );
  }
}

export default Theme;
