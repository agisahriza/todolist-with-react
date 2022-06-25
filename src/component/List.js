import React from "react";

class List extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="inner">
          <h2>{this.props.name}</h2>
        </div>
        <button className="check-button"></button>
      </div>
    );
  }
}

export default List;
