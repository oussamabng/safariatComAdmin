import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./GraphGen.css";
import { ReactComponent as Info } from "../GeneralAnalyDashbord/images/information.svg";

export default class GraphGen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mb-3 card">
        <div className="card-header-tab card-header">
          <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
            Top tours
          </div>
          <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
            <div className="btn-group dropdown">
              <span
                class="hint--bottom text-center  hint--medium"
                aria-label="this is a hint"
              >
                <button className="btn-icon btn-icon-only btn btn-link">
                  <Info fill="#b3b8bd" className="info-btn" />
                </button>
              </span>
              {/* here the dropdown div... */}
            </div>
          </div>
        </div>
        <div className="rowGraph">
          <Chart
            className="GenChart"
            options={this.props.options}
            series={this.props.series}
            type="bar"
            width="550"
          />
        </div>
      </div>
    );
  }
}
