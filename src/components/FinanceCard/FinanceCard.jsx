import React, { Component } from "react";
import { ReactComponent as Dollar } from "./images/Group 17.svg";
import "./FinanceCard.css";
export default class FinanceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { type, date, taux, number } = this.props;
    return (
      <div className="p-4 shadow-lg bg-white md-col2 mx-4 my-0 rounded-lg flex justify-between flex-row items-center">
        <div className="w-4/5 flex flex-col justify-between items-start">
          <div className="flex flex-col justify-between items-start">
            <span className="text-gray-600 text-sm md-text leading-relaxed">
              {type} sales
            </span>
            <p className="leading-loose text-md ">{number}</p>
          </div>
          <div className="flex w-full flex-row justify-start md-col items-center">
            <span
              className={
                taux < 0
                  ? "text-sm text-red-600 md-text"
                  : "text-sm text-green-400 md-text"
              }
            >
              {taux > 0 ? `+${taux}` : taux}%
            </span>
            <span className="text-sm ml-4 whitespace-no-wrap md-text">
              Since last {date}
            </span>
          </div>
        </div>
        <div className="flex justify-end w-1/5">
          <span>
            <Dollar className="md-svg" />
          </span>
        </div>
      </div>
    );
  }
}
