import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class FinanceLineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Product sale value",
          data: [70, 65, 60, 44, 77, 58, 63, 60, 15]
        }
      ],
      options: {
        colors: ["#169EF7", "#ffb808", "#084c61"],
        chart: {
          type: "bar",
          width: 500
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

        xaxis: {
          categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"]
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
          show: false
        }
      }
    };
  }
  render() {
    return (
      <div className="bar-one px-6 h-full flex flex-col justify-end items-center">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="80%"
        />
      </div>
    );
  }
}
