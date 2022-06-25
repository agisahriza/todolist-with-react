import React from "react";

class AddList extends React.Component {
  render() {
    console.log(this.state.lists);
    return (
      <div className="container bg-white">
        <h2 className="container-header text-center">Tambah yang harus dilakukan</h2>
        <form className="form" action="#" id="form">
          <div className="form-group form-title">
            <label for="title">Masukkan hal yang akan dilakukan</label>
            <input type="text" id="title" name="title" required />
          </div>
          <input type="submit" value="Submit" name="Submit" className="btn-submit" />
        </form>
      </div>
    );
  }
}

export default AddList;
