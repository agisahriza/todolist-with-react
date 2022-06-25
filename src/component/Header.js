import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className={this.props.theme[0]}>
        <h1>Todo List</h1>
      </header>
    );
  }
}

export default Header;
