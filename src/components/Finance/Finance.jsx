import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Info } from "../GeneralAnalyDashbord/images/information.svg";
import "./Finance.css";
import FinanceLineChart from "../Graphs/FinanceLineGraph.jsx";
import FinanceBarChart from "../Graphs/FinanceBarGraph.jsx";
import FinanceCard from "../FinanceCard/FinanceCard.jsx";
import FinanceDonut from "../Graphs/FinanceDonut.jsx";
import Task from "../Task/Task.jsx";
export default class Finance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Week",
          key: 21,
          scrollChor: "#about"
        },
        {
          name: "Month",
          key: 31,
          scrollChor: "#contact"
        }
      ],
      activeLink: "Week",
      actions_data: [
        {
          key: 1,
          color: "#2DCE98",
          price: 122.9
        },
        {
          key: 2,
          color: "#F53C56",
          price: 122.9
        },
        {
          key: 3,
          color: "#11CDEF",
          price: 122.9
        },
        {
          key: 4,
          color: "#FEB969",
          price: 122.9
        },
        {
          key: 5,
          color: "#EF5B5B",
          price: 122.9
        },
        {
          key: 6,
          color: "#175170",
          price: 122.9
        },
        {
          key: 7,
          color: "#FAA154",
          price: 122.9
        },
        {
          key: 8,
          color: "#21A0A0",
          price: 122.9
        },
        {
          key: 9,
          color: "#946846",
          price: 122.9
        },
        {
          key: 10,
          color: "#6D213C",
          price: 122.9
        }
      ]
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
                  className="hover-title"
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
          <div className="w-3/5 px-2">
            <div className="flex">
              <div className="w-3/5 my-col ">
                <div className="mb-3 card bg-white h-full flex flex-col justify-start  ">
                  <div className="card-header-tab card-header sm:px-5">
                    <div className="card-header-title  font-size-lg text-capitalize font-weight-normal">
                      Tour sales value
                    </div>
                    <div
                      className="ml-auto btn-group-lg btn-group lg:flex md:hidden sm:hidden xs:hidden"
                      role="groupe"
                    >
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
                    <span
                      class="hint--bottom text-center  hint--medium"
                      aria-label="this is a hint"
                    >
                      <button className="btn-icon btn-icon-only btn btn-link">
                        <Info fill="#b3b8bd" className="info-btn" />
                      </button>
                    </span>
                  </div>
                  <div className="btn-actions-pane-right m-0 text-capitalize actions-icon-btn flex justify-center items-center">
                    <FinanceLineChart />
                  </div>
                </div>
              </div>
              <div className="w-2/5">
                <div className="w-full flex flex-col justify-center h-full bg-white ">
                  <div className="card-header-tab card-header flex-row  sm:px-5">
                    <div className="card-header-title  font-size-lg text-capitalize font-weight-normal">
                      Tour sales value
                    </div>
                    <span
                      class="hint--bottom text-center ml-auto  hint--medium"
                      aria-label="this is a hint"
                    >
                      <button className="btn-icon btn-icon-only btn btn-link">
                        <Info fill="#b3b8bd" className="info-btn" />
                      </button>
                    </span>
                  </div>
                  <FinanceBarChart />
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
          <div className="w-2/5 px-2">
            <div className="flex">
              <div className="w-1/2">
                <div className="w-full h-full">
                  <FinanceCard
                    type="Product"
                    number={54}
                    taux={-1.48}
                    date="month"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="w-full h-full">
                  <FinanceCard
                    type="Tour"
                    number={54}
                    taux={+3.48}
                    date="month"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-full ">
                <div className="w-full h-full my-6 bg-white">
                  <div className="card-header-tab flex flex-row justify-between items-center p-4 sm:px-5">
                    <div className="card-header-title  font-size-lg text-capitalize font-weight-normal">
                      Budget manager
                    </div>
                    <p className="btn ml-auto py-3 shadow-md btn-alternate border-none cursor-pointer">
                      Change plan
                    </p>
                  </div>
                  <div className="px-5 flex justify-between flex-col">
                    <div className="flex justify-between items-center w-full">
                      <div className="w-1/2 chart-donut">
                        <FinanceDonut />
                      </div>
                      <div className="w-1/2">
                        <div className="scroling-div">
                          {this.state.actions_data.map(action => (
                            <div className="py-2 flex flex-col justify-between items-center ">
                              <div className="flex justify-center items-center my-2">
                                <div className="float-left flex justify-between items-center">
                                  <div
                                    className="mr-2 relative w-3 h-3 flex justify-center items-center text-center rounded-full"
                                    style={{
                                      backgroundColor: action["color"]
                                    }}
                                  >
                                    <div className="absolute w-1 h-1 rounded-full bg-white"></div>
                                  </div>
                                </div>
                                <span className="mr-4">
                                  Action {action["key"]}
                                </span>

                                <div className="float-right ml-auto">
                                  <span className="text-sm text-gray-600">
                                    ${action["price"]}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex p-4 flex-col justify-between items-start  ">
                      <div className="my-4 text-md font-size-lg">
                        Travel agency need
                      </div>
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="w-1/2">
                          <Task />
                          <Task />
                        </div>
                        <div className="w-1/2">
                          <Task />
                          <Task />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
