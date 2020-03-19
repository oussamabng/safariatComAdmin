import React, { Component } from "react";
import "./UserInteraction.css";
import { ReactComponent as Info } from "./images/information.svg";
import { ReactComponent as Mail } from "./images/envelope.svg";
import { ReactComponent as Dots } from "./images//ellipsis.svg";
import Chart from "react-apexcharts";
import Dubai from "./images/dubai.jpg";
import MapChart from "../Graphs/GeoChart.jsx";
import { Link } from "react-router-dom";

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
      },
      items: [
        {
          name: "Hour",
          key: 0,
          scrollChor: "#"
        },
        {
          name: "Day",
          key: 1,

          scrollChor: "#"
        },
        {
          name: "Week",
          key: 2,
          scrollChor: "#about"
        },
        {
          name: "Month",
          key: 3,
          scrollChor: "#contact"
        }
      ],
      activeLink: "Month",
      itemsTours: [
        {
          name: "Tours",
          key: 0,
          scrollChor: "#"
        },
        {
          name: "Products",
          key: 1,
          scrollChor: "#"
        }
      ],
      activeLinkTours: "Tours"
    };
  }
  data_regions = [
    {
      place: "Algiers, Algeria",
      progress: 90
    },
    {
      place: "Mekkah, Saudi Arabia",
      progress: 65
    },
    {
      place: "Milan, Italie",
      progress: 40
    }
  ];
  setActive = link => {
    //request funtion to filter
    this.setState({ activeLink: link }); //for active class
  };
  setActiveTours = link => {
    //request funtion to filter
    this.setState({ activeLinkTours: link }); //for active class
  };
  componentDidMount = () => {
    //for the progress bar animation
    var progress = document.getElementsByClassName("spanProgress");
    for (let i = 0; i < Object.values(progress).length; i++) {
      Object.values(progress)[
        i
      ].style.width = `${this.data_regions[i].progress}%`;
    }
  };
  render() {
    var data_active_users = [
      {
        name: "kevin meklien",
        type: "influencer",
        picture: Dubai
      },
      {
        name: "kevin meklien",
        type: "influencer",
        picture: Dubai
      },
      {
        name: "kevin meklien",
        type: "influencer",
        picture: Dubai
      },
      {
        name: "kevin meklien",
        type: "influencer",
        picture: Dubai
      },
      {
        name: "kevin meklien",
        type: "influencer",
        picture: Dubai
      },
      {
        name: "kevin meklien",
        type: "influencer",
        picture: Dubai
      },
      {
        name: "kevin meklien",
        type: "influencer",
        picture: Dubai
      },
      {
        name: "kevin meklien",
        type: "influencer",
        picture: Dubai
      }
    ];
    var result = [
      {
        title: "Tunis, Tunisia",
        body:
          "Af deel pomp soms tijd veel ad. En voorloopig uitgegeven en nu ad verkochten beschikken"
      },
      {
        title: "Tunis, Tunisia",
        body:
          "Af deel pomp soms tijd veel ad. En voorloopig uitgegeven en nu ad verkochten beschikken"
      },
      {
        title: "Tunis, Tunisia",
        body:
          "Af deel pomp soms tijd veel ad. En voorloopig uitgegeven en nu ad verkochten beschikken"
      },
      {
        title: "Tunis, Tunisia",
        body:
          "Af deel pomp soms tijd veel ad. En voorloopig uitgegeven en nu ad verkochten beschikken"
      }
    ];
    const secondColumnStart = Math.floor(result.length / 2);
    return (
      <div className="app-main__outer bg-white">
        <section className="mainGeneralDashbord">
          <div className="app-page-title ">
            <div className="flex lD:items-center lD:flex-row lD:justify-between mD:justify-between mD:items-center sD:justify-between sD:items-center  xsD:justify-between xsD:items-center">
              <div className="GeneralDash xsD:text-14 sD:text-19 mD:text-21 lD:text-28">
                <h1>Analytics and Statistics</h1>
              </div>
              <div className="flex lD:justify-center lD:items-center lD:ml-auto  GeneralDash">
                <Link
                  className="hover-title xsD:text-13 sD:text-15 mD:text-19 lD:text-21"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#747474"
                  }}
                  to="/admin/tours"
                >
                  Tours bookings & Products
                </Link>
                <Link
                  className="hover-title xsD:text-13 sD:text-15 mD:text-19 lD:text-21"
                  style={{
                    backgroundColor: "#ffb808",
                    color: "#ffffff"
                  }}
                  to="/admin/users"
                >
                  Users interactions
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="flex w-full lD:flex-row mb-4 mD:flex-col sD:flex-col xsD:flex-col ">
          <div className=" lD:w-3/5 mD:w-full sD:p-8 lD:p-2 pt-0 text-center">
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
                        <div className="btn-group-lg btn-group lD:flex mD:hidden sD:hidden xsD:hidden">
                          {this.state.items.map(elem => {
                            let isActive = this.state.activeLink === elem.name;
                            let navClass = isActive
                              ? "activeButt btn btn-alternate border-none cursor-pointer"
                              : "btn btn-alternate border-none cursor-pointer";
                            return (
                              <p
                                name={elem["name"]}
                                className={navClass}
                                scrollChor={elem["scrollChor"]}
                                key={elem["key"]}
                                onClick={props =>
                                  this.setActive(
                                    props.currentTarget.attributes[0].nodeValue
                                  )
                                }
                              >
                                {elem["name"]}
                              </p>
                            );
                          })}
                        </div>

                        <div className="btn-group dropdown flex justify-center items-center">
                          <span
                            className="hint--bottom text-center  hint--medium"
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
                    <div className="shaker flex justify-start btn-group-lg btn-group bg-white border-none mx-8">
                      {this.state.itemsTours.map(elem => {
                        let isActive = this.state.activeLinkTours === elem.name;
                        let navClass = isActive
                          ? "btn btn-alternate   border-none activeButt cursor-pointer"
                          : "btn btn-alternate   border-none cursor-pointer";
                        return (
                          <p
                            name={elem["name"]}
                            className={navClass}
                            scrollChor={elem["scrollChor"]}
                            key={elem["key"]}
                            onClick={props =>
                              this.setActiveTours(
                                props.currentTarget.attributes[0].nodeValue
                              )
                            }
                          >
                            {elem["name"]}
                          </p>
                        );
                      })}
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
            <div className="flex row_top justify-start lD:items-start lD:flex-row  mD:justify-start mD:items-center mb-4">
              {/* Top Liked tour begin */}
              <div className="lD:w-3/5 rs:w-full card scroll-div">
                <div className="card">
                  <div className="card-header-tab card-header">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                      Top Liked tours
                    </div>
                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                      <div className="btn-group dropdown flex justify-center items-center">
                        <span
                          className="hint--left text-center  hint--medium"
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
                  {/* secondColumnStart */}
                  <div className=" bg-white">
                    <div className="p-2 flex flex-row justify-between items-start">
                      <div className="lD:w-1/2 lD:block mD:hidden sD:hidden xsD:hidden">
                        {result.slice(secondColumnStart).map(item => (
                          <div className=" rounded set-top-tour mx-1 my-1 sD:m-4">
                            <div className="flex flex-col p-2 justify-start set-background-color-v2">
                              <h1 className="font-size-res">{item["title"]}</h1>
                              <p>{item["body"]}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="lD:w-1/2 lD:block  mD:hidden sD:hidden xsD:hidden">
                        {result.slice(0, secondColumnStart).map(item => (
                          <div className=" rounded set-top-tour mx-1 my-1 sD:m-4">
                            <div className="flex flex-col p-2 justify-start set-background-color-v2">
                              <h1 className="font-size-res">{item["title"]}</h1>
                              <p>{item["body"]}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="lD:hidden mD:flex sD:flex xsD:flex mD:w-full sD:w-full xsD:flex mD:cls sD:cls xsD:cls">
                        {result.map(item => (
                          <div className=" rounded set-top-tour mx-1 my-1 sD:m-4">
                            <div className="flex flex-col p-2 justify-start set-background-color-v2">
                              <h1 className="font-size-res">{item["title"]}</h1>
                              <p>{item["body"]}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lD:w-2/5 rs :w-full mD:pt-5 mD:pl-0 lD:pl-5 lD:pt-0 scroll-div">
                <div className="mb-3 card">
                  <div className="card-header-tab card-header">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                      Top Active users{" "}
                    </div>
                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                      <div className="btn-group dropdown flex justify-center items-center">
                        <span
                          className="hint--left text-center  hint--medium"
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
                  <div className="p-5 pt-0 pb-0 bg-white">
                    {data_active_users.map(user => (
                      <div className="set-background-color flex flex-row flex-row justify-between items-center p-3">
                        <div className="flex flex-row justify-start items-center">
                          <div className="widget-content px-1">
                            <img
                              className="imgStyle sec"
                              src={user["picture"]}
                              alt="img"
                            />
                          </div>
                          <div className="date-new flex flex-col justify-start ">
                            <h1 className="font-size-res">{user["name"]}</h1>
                            <p>{user["type"]} user</p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center">
                          <a href="#">
                            <Mail
                              className="px-2 w-10 h-10 responsive-icons"
                              fill="#707070"
                            />
                          </a>
                          <a href="#">
                            <Dots
                              className="px-2 w-10 h-10 responsive-icons"
                              fill="#707070"
                            />
                          </a>{" "}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" lD:w-2/5 cli mD:w-full mD:w-3/5 sD:w-full lD:p-2 p-5 pt-0  text-center">
            <div className="card">
              <div className="card-header-tab card-header">
                <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                  Top Regions
                </div>
                <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                  <div className="btn-group dropdown flex justify-center items-center">
                    <span
                      className="hint--left text-center  hint--medium"
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
              <div className="cli bg-white">
                <div
                  className="flex justify-center  items-center"
                  style={{
                    backgroundColor: "#f5f5f5"
                  }}
                >
                  <MapChart />
                </div>
              </div>
              <div className="bg-white flex cli  flex-col scroll-div">
                {this.data_regions.map(region => {
                  return (
                    <div className="flex flex-row py-4 justify-center">
                      <div className="w-2/5">
                        <p className="text-lg font-bold-500 whitespace-no-wrap">
                          {region["place"]}
                        </p>
                      </div>
                      <div className="w-2/5">
                        <div className="p-2 border h-4 relative bg-gray-400 rounded-full">
                          <span
                            className="spanProgress"
                            style={{ width: `${0}%` }}
                          ></span>
                        </div>
                      </div>
                      <div className="w-1/5 ">{region["progress"]}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserInteraction;
