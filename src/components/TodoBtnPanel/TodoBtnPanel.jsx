import React from "react";
import "./TodoBtnPanel.css";

class TodoBtnPanel extends React.Component {
  state = {
    str: "",
  };
  inputVal = (event) => {
    let value = event.target.value;
    this.setState({ str: value });
  };

  submitNewItem = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.str);
    event.target.reset();
  };

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.submitNewItem}>
        <input
          type="text"
          placeholder="Добавить новое событие"
          className="form-control new-post-label"
          onInput={this.inputVal}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>
    );
  }
}

export default TodoBtnPanel;
