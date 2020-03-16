import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class FinanceLineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Sales",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        responsive: [
          {
            breakpoint: 1800,
            options: {
              chart: {
                width: 550
              }
            }
          },
          {
            breakpoint: 1660,
            options: {
              chart: {
                width: 500
              }
            }
          },
          {
            breakpoint: 1460,
            options: {
              chart: {
                width: 450
              }
            }
          },
          {
            breakpoint: 1353,
            options: {
              chart: {
                width: 350
              }
            }
          },
          {
            breakpoint: 1250,
            options: {
              chart: {
                width: 500
              }
            }
          }
        ],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          fill: "#000"
        },
        colors: ["#084C61"],
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$" + val + " K";
            }
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep"
          ]
        }
      }
    };
  }
  render() {
    return (
      <div className="line-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="600"
        />
      </div>
    );
  }
}
