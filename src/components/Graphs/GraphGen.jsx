import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Chart from "react-apexcharts";
import "./GraphGen.css";
export default class GraphGen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

        series: [{
          name: 'Day',
          data: [80, 65, 60, 44, 77, 58, 63, 60, 15]
        }, {
          name: 'Week',
          data: [60, 55, 38, 15, 61, 58, 63, 44, 55]
        }, {
          name: 'Month',
          data: [44, 40, 25, 80, 38, 58, 63, 78, 63]
        }],
        options: {
          colors : ["#109bf8","#ffb808","#084c61"],
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '35%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false,
           
          },
          stroke: {
            show: true,
            width: 0.5,
            colors: ['transparent']
          },
          title:{
            text:"Bookings & Ordering",
            align :"left",
            offsetX :20,
            offsetY:10
          },
          yaxis:  {
          
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: false,
            },
            
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "" + val + " thousands"
              }
            },
           
          },
          legend: {
            show: true,
            position: 'top',
            horizontalAlign :"right",
            showForSingleSeries: true,
            onItemClick:{
              toggleDataSeries:true
            }
          }
        },
      };
    }
 
    render() {
      return (
        <div className="GeneralGraph">
        <div className="rowGraph">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="550"
            />
          </div>
        </div>
      </div>
      );
    }
  }

