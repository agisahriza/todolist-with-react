import React from "react";
import List from "./List";

class Lists extends React.Component {
  render() {
    const lists = this.props.lists;
    console.log(lists);
    return (
      <div className="container">
        <h2 className="container-header">Yang harus dilakukan</h2>
        <div className="list-item" id="todos">
          {lists.map((list) => {
            return <List name={list.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default Lists;
