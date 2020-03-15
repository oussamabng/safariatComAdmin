import React, { Component } from "react";
import "./UserInteraction.css";
import { ReactComponent as Info } from "./images/information.svg";
import { ReactComponent as Mail } from "./images/envelope.svg";
import { ReactComponent as Dots } from "./images//ellipsis.svg";
import Chart from "react-apexcharts";
import Dubai from "./images/dubai.jpg";
import MapChart from "../Graphs/GeoChart.jsx";

class UserInteraction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deg: 65,
      progress: 65,
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
        responsive: [
          {
            breakpoint: 1400,
            options: {
              chart: {
                width: 700
              }
            }
          },
          {
            breakpoint: 1300,
            options: {
              chart: {
                width: 600
              }
            }
          },
          {
            breakpoint: 1200,
            options: {
              chart: {
                width: 450
              }
            }
          },
          {
            breakpoint: 1000,
            options: {
              chart: {
                width: 300
              }
            }
          }
        ],
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
  componentDidMount = () => { };
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
    var { deg, progress } = this.state;
    return (
      <div className="app-main__outer">
        <section className="mainGeneralDashbord">
          <div className="app-page-title ">
            <div className="flex flex-row items-center justify-between sm:flex-col sm:items-center md:flex-row">
              <div className="GeneralDash sm:my-4">
                <h1>Analytics and Statistics</h1>
              </div>
              <div className="GeneralDash">
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
                    <div className="card-header-tab card-header sm:px-5">
                      <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                        Top tours
                      </div>
                      <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                        <div className="p-10  lg:hidden sm:px-5">
                          <div className="dropdown inline-block  relative">
                            <button className="bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded inline-flex items-center">
                              <span className="mr-1 text-xs">Time</span>
                              <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                              </svg>
                            </button>
                            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                              <li className="">
                                <a
                                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-xs"
                                  href="#"
                                >
                                  Hour
                                </a>
                              </li>
                              <li className="">
                                <a
                                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-xs"
                                  href="#"
                                >
                                  Week
                                </a>
                              </li>
                              <li className="">
                                <a
                                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-xs"
                                  href="#"
                                >
                                  Day
                                </a>
                              </li>
                              <li className="">
                                <a
                                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-xs"
                                  href="#"
                                >
                                  Month
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="btn-group-lg btn-group lg:flex md:hidden sm:hidden xs:hidden"
                          role="groupe"
                        >
                          <button className="btn btn-alternate btn-pill1">
                            Hour
                          </button>
                          <button className="btn btn-alternate active">
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
            <div className="xl:flex xl:flex-row xl:justify-between xl:items-center lg:flex-col lg:justify-center lg:items-center mb-4">
              {/* Top Liked tour begin */}
              <div className="xl:w-3/5 lg:w-full scroll-div">
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
                          <h1 className="font-size-res">Tunis, Tunisia</h1>
                          <p>
                            Af deel pomp soms tijd veel ad. En voorloopig
                            uitgegeven en nu ad verkochten beschikken.
                          </p>
                        </div>
                      </div>
                      <div className="w-3/5  rounded set-top-tour  mx-1">
                        <div className="flex flex-col p-2 justify-start set-background-color-v2">
                          <h1 className="font-size-res">Tunis, Tunisia</h1>
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
                      <h1 className="font-size-res">Tunis, Tunisia</h1>
                      <p>
                        Af deel pomp soms tijd veel ad. En voorloopig uitgegeven
                        en nu ad verkochten beschikken.
                      </p>
                    </div>
                  </div>
                  <div className="w-3/5  rounded set-top-tour  mx-1">
                    <div className="flex flex-col p-2 justify-start set-background-color-v2">
                      <h1 className="font-size-res">Tunis, Tunisia</h1>
                      <p>
                        Af deel pomp soms tijd veel ad. En voorloopig uitgegeven
                        en nu ad verkochten beschikken.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-2/5 lg:w-full lg:pt-5 lg:pl-0 xl:pl-5 xl:pt-0 scroll-div">
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
                  <div className="p-5 pt-0 pb-0 bg-white">
                    <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                      <div className="flex flex-row justify-start items-center">
                        <div className="widget-content px-1">
                          <img className="imgStyle sec" src={Dubai} alt="img" />
                        </div>
                        <div className="date-new flex flex-col justify-start ">
                          <h1 className="font-size-res">kevin meklien</h1>
                          <p>Influencer user</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        <a href="#">
                          <Mail className="px-2 w-10 h-10 responsive-icons" fill="#707070" />
                        </a>
                        <a href="#">
                          <Dots className="px-2 w-10 h-10 responsive-icons" fill="#707070" />
                        </a> </div>
                    </div>
                    <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                      <div className="flex flex-row justify-start items-center">
                        <div className="widget-content px-1">
                          <img className="imgStyle sec" src={Dubai} alt="img" />
                        </div>
                        <div className="date-new flex flex-col justify-start ">
                          <h1 className="font-size-res">kevin meklien</h1>
                          <p>Influencer user</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        <a href="#">
                          <Mail className="px-2 w-10 h-10 responsive-icons" fill="#707070" />
                        </a>
                        <a href="#">
                          <Dots className="px-2 w-10 h-10 responsive-icons" fill="#707070" />
                        </a>
                      </div>
                    </div>
                    <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                      <div className="flex flex-row justify-start items-center">
                        <div className="widget-content px-1">
                          <img className="imgStyle sec" src={Dubai} alt="img" />
                        </div>
                        <div className="date-new flex flex-col justify-start ">
                          <h1 className="font-size-res">kevin meklien</h1>
                          <p>Influencer user</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        <a href="#">
                          <Mail className="px-2 w-10 h-10 responsive-icons" fill="#707070" />
                        </a>
                        <a href="#">
                          <Dots className="px-2 w-10 h-10 responsive-icons" fill="#707070" />
                        </a> </div>
                    </div>
                    <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                      <div className="flex flex-row justify-start items-center">
                        <div className="widget-content px-1">
                          <img className="imgStyle sec" src={Dubai} alt="img" />
                        </div>
                        <div className="date-new flex flex-col justify-start ">
                          <h1 className="font-size-res">kevin meklien</h1>
                          <p>Influencer user</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        <a href="#">
                          <Mail className="px-2 w-10 h-10 responsive-icons" fill="#707070" />
                        </a>
                        <a href="#">
                          <Dots className="px-2 w-10 h-10 responsive-icons" fill="#707070" />
                        </a> </div>
                    </div>
                    <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                      <div className="flex flex-row justify-start items-center">
                        <div className="widget-content px-1">
                          <img className="imgStyle sec" src={Dubai} alt="img" />
                        </div>
                        <div className="date-new flex flex-col justify-start ">
                          <h1 className="font-size-res">kevin meklien</h1>
                          <p>Influencer user</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        <a href="#">
                          <Mail className="px-2 w-10 h-10 responsive-icons" fill="#707070" />
                        </a>
                        <a href="#">
                          <Dots className="px-2 w-10 h-10 responsive-icons" fill="#707070" />
                        </a> </div>
                    </div>
                    <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                      <div className="flex flex-row justify-start items-center">
                        <div className="widget-content px-1">
                          <img className="imgStyle sec" src={Dubai} alt="img" />
                        </div>
                        <div className="date-new flex flex-col justify-start ">
                          <h1 className="font-size-res">kevin meklien</h1>
                          <p>Influencer user</p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        <a href="#">
                          <Mail className="px-2 w-10 h-10 responsive-icons" fill="#707070" />
                        </a>
                        <a href="#">
                          <Dots className="px-2 w-10 h-10 responsive-icons" fill="#707070" />
                        </a> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5   text-center">
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
              <div className="p-4 bg-white">
                <div
                  className="flex justify-center p-0  items-center"
                  style={{
                    backgroundColor: "#f5f5f5"
                  }}
                >
                  <MapChart />
                </div>
              </div>
              <div className="bg-white p-4 scroll-div">
                <div className="xl:flex xl:justify-between xl:items-center lg:justify-start xl:flex-row md:py-4 lg:py-4 lg:flex-col">
                  <div className="xl:w-2/3 lg:w-full">
                    <p className="text-lg font-bold-500">
                      Mekkah, Saudi Arabia
                    </p>
                  </div>
                  <div className="xl:w-2/3 lg:w-full">
                    <div className="p-2 border h-4 relative bg-gray-400 rounded-full">
                      <span
                        className="spanProgress"
                        style={{ width: `${progress}%` }}
                      ></span>
                    </div>
                  </div>
                  <div className="xl:w-1/5 lg:w-full">{deg}%</div>
                </div>
                <div className="xl:flex xl:justify-between xl:items-center lg:justify-start xl:flex-row md:py-4 lg:py-4 lg:flex-col">
                  <div className="xl:w-2/3 lg:w-full">
                    <p className="text-lg font-bold-500">
                      Mekkah, Saudi Arabia
                    </p>
                  </div>
                  <div className="xl:w-2/3 lg:w-full">
                    <div className="p-2 border h-4 relative bg-gray-400 rounded-full">
                      <span
                        className="spanProgress"
                        style={{ width: `${progress}%` }}
                      ></span>
                    </div>
                  </div>
                  <div className="xl:w-1/5 lg:w-full">{deg}%</div>
                </div>
                <div className="xl:flex xl:justify-between xl:items-center lg:justify-start xl:flex-row md:py-4 lg:py-4 lg:flex-col">
                  <div className="xl:w-2/3 lg:w-full">
                    <p className="text-lg font-bold-500">
                      Mekkah, Saudi Arabia
                    </p>
                  </div>
                  <div className="xl:w-2/3 lg:w-full">
                    <div className="p-2 border h-4 relative bg-gray-400 rounded-full">
                      <span
                        className="spanProgress"
                        style={{ width: `${progress}%` }}
                      ></span>
                    </div>
                  </div>
                  <div className="xl:w-1/5 lg:w-full">{deg}%</div>
                </div>

                <div className="xl:flex xl:justify-between xl:items-center lg:justify-start xl:flex-row md:py-4 lg:py-4 lg:flex-col">
                  <div className="xl:w-2/3 lg:w-full">
                    <p className="text-lg font-bold-500">
                      Mekkah, Saudi Arabia
                    </p>
                  </div>
                  <div className="xl:w-2/3 lg:w-full">
                    <div className="p-2 border h-4 relative bg-gray-400 rounded-full">
                      <span
                        className="spanProgress"
                        style={{ width: `${progress}%` }}
                      ></span>
                    </div>
                  </div>
                  <div className="xl:w-1/5 lg:w-full">{deg}%</div>
                </div>
                <div className="xl:flex xl:justify-between xl:items-center lg:justify-start xl:flex-row md:py-4 lg:py-4 lg:flex-col">
                  <div className="xl:w-2/3 lg:w-full">
                    <p className="text-lg font-bold-500">
                      Mekkah, Saudi Arabia
                    </p>
                  </div>
                  <div className="xl:w-2/3 lg:w-full">
                    <div className="p-2 border h-4 relative bg-gray-400 rounded-full">
                      <span
                        className="spanProgress"
                        style={{ width: `${progress}%` }}
                      ></span>
                    </div>
                  </div>
                  <div className="xl:w-1/5 lg:w-full">{deg}%</div>
                </div>
                <div className="xl:flex xl:justify-between xl:items-center lg:justify-start xl:flex-row md:py-4 lg:py-4 lg:flex-col">
                  <div className="xl:w-2/3 lg:w-full">
                    <p className="text-lg font-bold-500">
                      Mekkah, Saudi Arabia
                    </p>
                  </div>
                  <div className="xl:w-2/3 lg:w-full">
                    <div className="p-2 border h-4 relative bg-gray-400 rounded-full">
                      <span
                        className="spanProgress"
                        style={{ width: `${progress}%` }}
                      ></span>
                    </div>
                  </div>
                  <div className="xl:w-1/5 lg:w-full">{deg}%</div>
                </div>
                <div className="xl:flex xl:justify-between xl:items-center lg:justify-start xl:flex-row md:py-4 lg:py-4 lg:flex-col">
                  <div className="xl:w-2/3 lg:w-full">
                    <p className="text-lg font-bold-500">
                      Mekkah, Saudi Arabia
                    </p>
                  </div>
                  <div className="xl:w-2/3 lg:w-full">
                    <div className="p-2 border h-4 relative bg-gray-400 rounded-full">
                      <span
                        className="spanProgress"
                        style={{ width: `${progress}%` }}
                      ></span>
                    </div>
                  </div>
                  <div className="xl:w-1/5 lg:w-full">{deg}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserInteraction;
