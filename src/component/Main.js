import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOnInput: "",
      listsUnCompleted: [],
      listsCompleted: [],
      change: {
        active: false,
        id: 0,
        name: "",
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      listOnInput: event.target.value,
    });
  };

  handleChangeList = (event) => {
    const id = Number(event.target.name);
    const lists = this.state.listsUnCompleted;
    let listName;

    lists.forEach((list) => {
      if (id === list.id) {
        listName = list.name;
      }
    });

    document.querySelector("input").focus();
    window.scrollTo(0, 0);
    this.setState({
      change: {
        active: true,
        id: id,
        name: listName,
      },
      listOnInput: listName,
    });
  };

  cancleHandle = () => {
    this.setState({
      change: {
        active: false,
        id: 0,
        name: "",
      },
      listOnInput: "",
    });
  };

  handleChangeForm = () => {
    const change = this.state.change;
    const lists = this.state.listsUnCompleted;
    const newName = this.state.listOnInput;
    const newLists = [];

    lists.forEach((list) => {
      if (change.id === list.id) {
        newLists.push({
          name: newName,
          id: change.id,
        });
      } else {
        newLists.push(list);
      }
    });

    this.setState({
      change: {
        active: false,
        id: 0,
        name: "",
      },
      listOnInput: "",
      listsUnCompleted: newLists,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const lists = this.state.listsUnCompleted;
    lists.push({
      name: this.state.listOnInput,
      id: +new Date(),
    });
    this.setState({
      listOnInput: "",
      listsUnCompleted: lists,
    });
  };

  handleClickCompleted = (event) => {
    const id = Number(event.target.name);
    const lists = this.state.listsUnCompleted;
    const listsUnCompleted = [];
    const listsCompleted = this.state.listsCompleted;
    lists.forEach((list) => {
      if (id === list.id) {
        listsCompleted.push(list);
      } else {
        listsUnCompleted.push(list);
      }
    });
    this.setState({
      listsUnCompleted: listsUnCompleted,
      listsCompleted: listsCompleted,
    });
  };

  handleClickUnCompleted = (event) => {
    const id = Number(event.target.name);
    const lists = this.state.listsCompleted;
    const listsUnCompleted = this.state.listsUnCompleted;
    const listsCompleted = [];
    lists.forEach((list) => {
      if (id === list.id) {
        listsUnCompleted.push(list);
      } else {
        listsCompleted.push(list);
      }
    });
    this.setState({
      listsUnCompleted: listsUnCompleted,
      listsCompleted: listsCompleted,
    });
  };

  handleClickDelete = (event) => {
    const id = Number(event.target.name);
    const lists = this.state.listsCompleted;
    const newList = [];
    lists.forEach((list) => {
      if (id !== list.id) {
        newList.push(list);
      }
    });
    this.setState({
      listsCompleted: newList,
    });
  };

  render() {
    const listsUnCompleted = this.state.listsUnCompleted;
    const listsCompleted = this.state.listsCompleted;
    const change = this.state.change;
    let btnCancel;
    if (change.active) {
      btnCancel = (
        <input
          type="button"
          value="Cancle"
          name="Submit"
          className="btn-submit"
          onClick={() => {
            this.cancleHandle();
          }}
        />
      );
    }

    return (
      <div className="wrapper">
        <div className="container bg-white">
          <h2 className="container-header text-center">{!change.active ? "Tambah yang harus dilakukan" : `Mengedit pekerjaan '${change.name}'`}</h2>
          <form
            className="form"
            action=""
            id="form"
            onSubmit={(event) => {
              if (!change.active) this.handleSubmit(event);
              else this.handleChangeForm(event);
            }}
          >
            <div className="form-group form-title">
              <label for="title">{!change.active ? "Masukkan hal yang akan dilakukan" : "Masukkan hal baru akan dilakukan"}</label>
              <input
                type="text"
                id="title"
                name="title"
                value={this.state.listOnInput}
                onChange={(event) => {
                  this.handleChange(event);
                }}
              />
            </div>

            {btnCancel}
            <input type="submit" value={!change.active ? "Submit" : "Edit"} name="Submit" className="btn-submit" />
          </form>
        </div>

        <div className="container">
          <h2 className="container-header">Yang harus dilakukan</h2>
          <div className="list-item" id="todos">
            {listsUnCompleted.map((list) => {
              return (
                <div className="item">
                  <div className="inner">
                    <h2>{list.name}</h2>
                  </div>
                  <button
                    name={list.id}
                    className="change-button"
                    onClick={(event) => {
                      this.handleChangeList(event);
                    }}
                  ></button>
                  <button
                    name={list.id}
                    className="check-button"
                    onClick={(event) => {
                      this.handleClickCompleted(event);
                    }}
                  ></button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container">
          <h2 className="container-header">Yang sudah dilakukan</h2>
          <div className="list-item" id="completed-todos">
            {listsCompleted.map((list) => {
              return (
                <div className="item">
                  <div className="inner">
                    <h2>{list.name}</h2>
                  </div>
                  <button
                    name={list.id}
                    className="undo-button"
                    onClick={(event) => {
                      this.handleClickUnCompleted(event);
                    }}
                  ></button>
                  <button
                    name={list.id}
                    className="trash-button"
                    onClick={(event) => {
                      this.handleClickDelete(event);
                    }}
                  ></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
