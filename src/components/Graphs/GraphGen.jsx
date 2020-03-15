import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./GraphGen.css";
import { ReactComponent as Info } from "../GeneralAnalyDashbord/images/information.svg";

export default class GraphGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Day",
          data: [80, 65, 60, 44, 77, 58, 63, 60, 15]
        },
        {
          name: "Week",
          data: [60, 55, 38, 15, 61, 58, 63, 44, 55]
        },
        {
          name: "Month",
          data: [44, 40, 25, 80, 38, 58, 63, 78, 63]
        }
      ],
      options: {
        responsive: [
          {
            breakpoint: 1300,
            options: {
              chart: {
                width: 450
              }
            }
          },
          {
            breakpoint: 1100,
            options: {
              chart: {
                width: 350
              }
            }
          }
        ],
        colors: ["#109bf8", "#ffb808", "#084c61"],
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "35%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 0.5,
          colors: ["transparent"]
        },
        yaxis: {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: false
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "" + val + " thousands";
            }
          }
        },
        legend: {
          show: true,
          position: "top",
          horizontalAlign: "right",
          showForSingleSeries: true,
          onItemClick: {
            toggleDataSeries: true
          }
        }
      }
    };
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
              <button className="btn-icon btn-icon-only btn btn-link">
                <Info fill="#b3b8bd" className="info-btn" />
              </button>
              {/* here the dropdown div... */}
            </div>
          </div>
        </div>
        <div className="rowGraph">
          <Chart
            className="GenChart"
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="550"
          />
        </div>
      </div>
    );
  }
}
