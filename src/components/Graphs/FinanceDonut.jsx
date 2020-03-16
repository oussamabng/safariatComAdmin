import React, { Component } from "react";
import Chart from "react-apexcharts";
export default class FinanceDonut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [122.9, 96.785, 35.785, 22.123],
      options: {
        fill: {
          colors: [
            "#2DCE98",
            "#F53C56",
            "#11CDEF",
            "#FEB969",
            "#EF5B5B",
            "#175170",
            "#FAA154",
            "#21A0A0",
            "#946846",
            "#6D213C"
          ]
        },
        plotOptions: {
          pie: {
            customScale: 1,
            offsetX: 0,
            offsetY: 0,
            expandOnClick: true,
            dataLabels: {
              enabled: false,
              colors: ["#000", "#ffff"]
            },
            donut: {
              size: "65%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontWeight: 400,
                  color: "black"
                },
                value: {
                  show: true,
                  fontWeight: 500,
                  color: "black",
                  fontSize: "18px",
                  color: "#172B4D",
                  fontFamily: "Montserrat sans-serif",
                  offsetY: 0,
                  formatter: function(val) {
                    return val + " $";
                  }
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: "total budget",
                  fontSize: "21px",
                  fontWeight: 500,
                  fontFamily: "Montserrat sans-serif",
                  color: "#172B4D",
                  formatter: function(w) {
                    return (
                      w.globals.seriesTotals.reduce((a, b) => {
                        return a + b;
                      }, 0) + " $"
                    );
                  }
                }
              }
            }
          }
        },
        chart: {
          type: "donut"
        },
        responsive: [
          {
            breakpoint: 1600,
            options: {
              chart: {
                width: 300
              }
            }
          },
          {
            breakpoint: 1400,
            options: {
              chart: {
                width: 250
              }
            }
          },
          {
            breakpoint: 1250,
            options: {
              chart: {
                width: 350
              }
            }
          }
        ]
      }
    };
  }
  render() {
    return (
      <Chart
        type="donut"
        options={this.state.options}
        series={this.state.series}
        width="350"
      />
    );
  }
}
