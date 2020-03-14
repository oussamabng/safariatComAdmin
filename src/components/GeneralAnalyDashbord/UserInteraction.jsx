import React, { Component } from "react";
import "./UserInteraction.css";
import { ReactComponent as Info } from "./images/information.svg";
import { ReactComponent as Mail } from "./images/envelope.svg";
import { ReactComponent as Dots } from "./images//ellipsis.svg";
import Chart from "react-apexcharts";
import Dubai from "./images/dubai.jpg";
var ChartGeo = require("react-google-charts").Chart;

var dataGeo = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700]
];
var optionsGeo = {
  sizeAxis: { minValue: 0, maxValue: 100 },
  pointSize: 50,
  legend: "none",
  colorAxis: { colors: ["#ffcc4e"] },
  datalessRegionColor: "#084C61"
};
class UserInteraction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],

      options: {
        chart: {
          height: 350,
          type: "area"
        },
        colors: ["#19a4cf", "#ffcc4f"],

        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          colors: ["#19a4cf", "#ffcc4f"]
        },
        fill: {
          colors: ["#19a4cf", "#ffcc4f"]
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      }
    };
  }
  handleActive = element => {
    const arr = document.getElementsByClassName(
      "btn btn-alternate bg-white  border-none"
    );
    if (arr[0].classList[arr[0].classList.length - 1] === "active") {
      arr[0].classList.remove("active");
      arr[1].classList.add("active");
    } else {
      arr[1].classList.remove("active");
      arr[0].classList.add("active");
    }
  };
  render() {
    return (
      <div className="app-main__outer">
        <section className="mainGeneralDashbord">
          <div className="app-page-title">
            <div className="page-title-wrapper">
              <div className="GeneralDash">
                <h1>Analytics and Statistics</h1>
              </div>
              <div className="GeneralButtons GeneralDash">
                <a
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#747474"
                  }}
                  href="/admin/tours"
                >
                  Tours bookings & Products
                </a>
                <a
                  style={{
                    backgroundColor: "#ffb808",
                    color: "#ffffff"
                  }}
                  href="/admin/users"
                >
                  Users interactions
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-3/5  p-5 pt-0 text-center">
            <div className="flex mb-4">
              <div className="w-full">
                <div className="body-tabs">
                  <div className="mb-3 card bg-white">
                    <div className="card-header-tab card-header">
                      <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                        Likes & Share status
                      </div>
                      <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                        <div className="btn-group-lg btn-group" role="groupe">
                          <button className="btn btn-alternate btn-pill1">
                            Day
                          </button>
                          <button className="btn btn-alternate">Week</button>
                          <button className="btn btn-alternate btn-pill2">
                            Month
                          </button>
                        </div>
                        <div className="btn-group dropdown flex justify-center items-center">
                          <button className="btn-icon btn-icon-only btn btn-link">
                            <Info fill="#b3b8bd" className="info-btn" />
                          </button>
                          {/* here the dropdown div... */}
                        </div>
                      </div>
                    </div>
                    <div
                      className="shaker flex justify-start btn-group-lg btn-group bg-white border-none mx-8"
                      role="groupe"
                    >
                      <button
                        className="btn btn-alternate bg-white  border-none active"
                        onClick={this.handleActive.bind(this)}
                      >
                        Tours
                      </button>
                      <button
                        className="btn btn-alternate bg-white  border-none"
                        onClick={this.handleActive.bind(this)}
                      >
                        Products
                      </button>
                    </div>
                    <div className="rowGraph">
                      <div className="mixed-chart">
                        <Chart
                          options={this.state.options}
                          series={this.state.series}
                          type="area"
                          width="750"
                          height="300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mb-4">
              {/* Top Liked tour begin */}
              <div className="w-3/5 scroll-div">
                <div className="card">
                  <div className="card-header-tab card-header">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                      Top Liked tours
                    </div>
                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                      <div className="btn-group dropdown flex justify-center items-center">
                        <button className="btn-icon btn-icon-only btn btn-link">
                          <Info fill="#b3b8bd" className="info-btn" />
                        </button>
                        {/* here the dropdown div... */}
                      </div>
                    </div>
                  </div>
                  <div className=" bg-white">
                    <div className="p-2 flex flex-row justify-between items-center">
                      <div className="w-3/5 rounded set-top-tour mx-1">
                        <div className="flex flex-col p-2 justify-start set-background-color-v2">
                          <h1>Tunis, Tunisia</h1>
                          <p>
                            Af deel pomp soms tijd veel ad. En voorloopig
                            uitgegeven en nu ad verkochten beschikken.
                          </p>
                        </div>
                      </div>
                      <div className="w-3/5  rounded set-top-tour  mx-1">
                        <div className="flex flex-col p-2 justify-start set-background-color-v2">
                          <h1>Tunis, Tunisia</h1>
                          <p>
                            Af deel pomp soms tijd veel ad. En voorloopig
                            uitgegeven en nu ad verkochten beschikken.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 flex flex-row justify-between items-center">
                  <div className="w-3/5 rounded set-top-tour mx-1">
                    <div className="flex flex-col p-2 justify-start set-background-color-v2">
                      <h1>Tunis, Tunisia</h1>
                      <p>
                        Af deel pomp soms tijd veel ad. En voorloopig uitgegeven
                        en nu ad verkochten beschikken.
                      </p>
                    </div>
                  </div>
                  <div className="w-3/5  rounded set-top-tour  mx-1">
                    <div className="flex flex-col p-2 justify-start set-background-color-v2">
                      <h1>Tunis, Tunisia</h1>
                      <p>
                        Af deel pomp soms tijd veel ad. En voorloopig uitgegeven
                        en nu ad verkochten beschikken.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 pl-5 scroll-div">
                <div className="mb-3 card">
                  <div className="card-header-tab card-header">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                      Top Active users{" "}
                    </div>
                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                      <div className="btn-group dropdown flex justify-center items-center">
                        <button className="btn-icon btn-icon-only btn btn-link">
                          <Info fill="#b3b8bd" className="info-btn" />
                        </button>
                        {/* here the dropdown div... */}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0 bg-white">
                    <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                      <div className="flex flex-row justify-start items-center">
                        <div className="widget-content px-1">
                          <img className="imgStyle sec" src={Dubai} alt="img" />
                        </div>
                        <div className="date-new flex flex-col justify-start ">
                          <h1 className="text-sm">kevin meklien</h1>
                          <p>Influencer user</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        <Mail className="px-2 w-10 h-10" fill="#707070" />
                        <Dots className="px-2 w-10 h-10" fill="#707070" />
                      </div>
                    </div>
                    <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                      <div className="flex flex-row justify-start items-center">
                        <div className="widget-content px-1">
                          <img className="imgStyle sec" src={Dubai} alt="img" />
                        </div>
                        <div className="date-new flex flex-col justify-start ">
                          <h1 className="text-sm">kevin meklien</h1>
                          <p>Influencer user</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        <a href="#">
                          <Mail className="px-2 w-10 h-10" fill="#707070" />
                        </a>
                        <a href="#">
                          <Dots className="px-2 w-10 h-10" fill="#707070" />
                        </a>
                      </div>
                    </div>
                    <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                      <div className="flex flex-row justify-start items-center">
                        <div className="widget-content px-1">
                          <img className="imgStyle sec" src={Dubai} alt="img" />
                        </div>
                        <div className="date-new flex flex-col justify-start ">
                          <h1 className="text-sm">kevin meklien</h1>
                          <p>Influencer user</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        <a href="#">
                          <Mail className="px-2 w-10 h-10" fill="#707070" />
                        </a>
                        <a href="#">
                          <Dots className="px-2 w-10 h-10" fill="#707070" />
                        </a>
                      </div>
                    </div>
                    <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                      <div className="flex flex-row justify-start items-center">
                        <div className="widget-content px-1">
                          <img className="imgStyle sec" src={Dubai} alt="img" />
                        </div>
                        <div className="date-new flex flex-col justify-start ">
                          <h1 className="text-sm">kevin meklien</h1>
                          <p>Influencer user</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        <a href="#">
                          <Mail className="px-2 w-10 h-10" fill="#707070" />
                        </a>
                        <a href="#">
                          <Dots className="px-2 w-10 h-10" fill="#707070" />
                        </a>
                      </div>
                    </div>
                    <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                      <div className="flex flex-row justify-start items-center">
                        <div className="widget-content px-1">
                          <img className="imgStyle sec" src={Dubai} alt="img" />
                        </div>
                        <div className="date-new flex flex-col justify-start ">
                          <h1 className="text-sm">kevin meklien</h1>
                          <p>Influencer user</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        <a href="#">
                          <Mail className="px-2 w-10 h-10" fill="#707070" />
                        </a>
                        <a href="#">
                          <Dots className="px-2 w-10 h-10" fill="#707070" />
                        </a>
                      </div>
                    </div>
                    <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                      <div className="flex flex-row justify-start items-center">
                        <div className="widget-content px-1">
                          <img className="imgStyle sec" src={Dubai} alt="img" />
                        </div>
                        <div className="date-new flex flex-col justify-start ">
                          <h1 className="text-sm">kevin meklien</h1>
                          <p>Influencer user</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        <a href="#">
                          <Mail className="px-2 w-10 h-10" fill="#707070" />
                        </a>
                        <a href="#">
                          <Dots className="px-2 w-10 h-10" fill="#707070" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 bg-red-500   text-center">
            <div className="card">
              <div className="card-header-tab card-header">
                <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                  Top Regions
                </div>
                <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                  <div className="btn-group dropdown flex justify-center items-center">
                    <button className="btn-icon btn-icon-only btn btn-link">
                      <Info fill="#b3b8bd" className="info-btn" />
                    </button>
                    {/* here the dropdown div... */}
                  </div>
                </div>
              </div>
              <div className="flex justify-center p-10 pt-0 items-center bg-white">
                <ChartGeo
                  className="chart-geo"
                  width={"100%"}
                  height={"400px"}
                  chartType="GeoChart"
                  data={dataGeo}
                  options={optionsGeo}
                  // Note: you will need to get a mapsApiKey for your project.
                  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                  mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
                  rootProps={{ "data-testid": "1" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserInteraction;
