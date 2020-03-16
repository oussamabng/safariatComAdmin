import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Info } from "../GeneralAnalyDashbord/images/information.svg";
import Chart from "react-apexcharts";
import "./Finance.css";

export default class Finance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Desktops",
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
      <div className="app-main__outer">
        <section className="mainGeneralDashbord">
          <div className="app-page-title ">
            <div className="flex xl:items-end md:justify-center md:items-center  lg:justify-between md:flex-col lg:flex-row">
              <div className="GeneralDash">
                <h1>Finance</h1>
              </div>
              <div className="flex lg:justify-center lg:items-center lg:ml-auto md:mt-4 GeneralDash">
                <Link
                  style={{
                    backgroundColor: "#ffb808",
                    color: "#ffffff"
                  }}
                  to="/admin/finance"
                >
                  Finance management
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="flex">
          <div className="w-3/5">
            <div className="flex">
              <div className="w-3/5 my-col">
                <div className="mb-3 card bg-white">
                  <div className="card-header-tab card-header sm:px-5">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                      Tour sales value
                    </div>
                  </div>
                  <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                    <div className="line-chart">
                      <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                        width="500"
                      />
                    </div>
                  </div>
                </div>

                {/* chart rours sales */}
              </div>
              <div className="w-2/5">
                <div className="w-full h-full bg-white">
                  <p>Product sales value</p>
                </div>
                {/* Product sales value */}
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="w-full h-full bg-white">
                  <p>tableau</p>
                </div>
                {/* tableau */}
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <div className="flex">
              <div className="w-1/2">
                <div className="w-full h-full bg-white">
                  <p>product sale card</p>
                </div>
                {/* product sale card */}
              </div>
              <div className="w-1/2">
                <div className="w-full h-full bg-white">
                  <p>product sale card</p>
                </div>
                {/* product sale card */}
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="w-full h-full bg-white">
                  <p>testing berk</p>
                </div>
                {/* budget manager */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
