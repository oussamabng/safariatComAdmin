import React, { Component } from "react";
import "./Task.css";
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="flex flex-row justify-start w-full my-4 items-center">
        <div className="float-left  flex flex-col justify-center items-start">
          <div className="flex justify-between items-center">
            <input type="checkbox" id="todo" name="todo" value="todo" />
            <label
              className="my-label"
              for="todo"
              data-content="travel agency need 1"
            >
              travel agency need 1
            </label>
          </div>
          <span className="ml-10 text-sm text-deco">14/14/1200</span>
        </div>
      </div>
    );
  }
}
