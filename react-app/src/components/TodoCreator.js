import React, { Component } from "react";

export class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { newItemText: "" };
    this.updateNewTextValue = this.updateNewTextValue.bind(this);
    this.createNewTodo = this.createNewTodo.bind(this);
  }

  updateNewTextValue(event) {
    this.setState({ newItemText: event.target.value });
  }

  createNewTodo() {
    this.props.callback(this.state.newItemText);
    this.setState({ newItemText: "" });
  }

  render() {
    return (
      <div className="my-1">
        <input
          className="form-control"
          value={this.state.newItemText}
          onChange={this.updateNewTextValue}
        />

        <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
          Add
        </button>
      </div>
    );
  }
}
