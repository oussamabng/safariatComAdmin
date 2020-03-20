import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Info } from "../GeneralAnalyDashbord/images/information.svg";
import "./Finance.css";
import FinanceLineChart from "../Graphs/FinanceLineGraph.jsx";
import FinanceBarChart from "../Graphs/FinanceBarGraph.jsx";
import FinanceCard from "../FinanceCard/FinanceCard.jsx";
import FinanceDonut from "../Graphs/FinanceDonut.jsx";
import Task from "../Task/Task.jsx";
import FinanceTable from "../FinanceTable/FinanceTable";
import { ReactComponent as ArrowLeft } from "../GeneralAnalyDashbord/images/left-arrow.svg";
import { ReactComponent as ArrowRight } from "../GeneralAnalyDashbord/images/right-arrow.svg";
import HeaderPage from "../HeaderPage/HeaderPage";

export default class Finance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Week",
          key: 21,
          scrollchor: "#about"
        },
        {
          name: "Month",
          key: 31,
          scrollchor: "#contact"
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
      ],
      dataTable: [
        {
          key: 5151551151,
          name: "martin dekly",
          paying_day: "20/03/2020",
          status: "not yet",
          salary: "2500",
          departement: "HR"
        },
        {
          key: 54544454545111,
          name: "alisia ester",
          paying_day: "20/03/2020",
          status: "paid out",
          salary: "2500",
          departement: "CRM"
        },
        {
          key: 11,
          name: "martin dekly",
          paying_day: "20/03/2020",
          status: "not yet",
          salary: "2500",
          departement: "HR"
        },
        {
          key: 20336656,
          name: "martin dekly",
          paying_day: "20/03/2020",
          status: "not yet",
          salary: "2500",
          departement: "HR"
        }
      ],
      dataProductCard: {
        type: "product",
        number: 54,
        taux: -1.48,
        time: "month"
      },
      dataTourCard: {
        type: "tour",
        number: 54,
        taux: 3.48,
        time: "month"
      },
      dataTasks: [
        {
          key: 151520,
          name: "travel agency task 1",
          date: "14/14/2020"
        },
        {
          key: 46845,
          name: "travel agency task 1",
          date: "14/14/2020"
        }
      ]
    };
  }
  setActive = link => {
    //request funtion to filter
    this.setState({ activeLink: link }); //for active class
  };
  render() {
    const secondColumnStart = Math.floor(this.state.dataTasks.length / 2);
    return (
      <div className="z-10 flex flex-col ">
        <HeaderPage
          title="Finance"
          buttons={[
            {
              title: "  Finance management",
              active: true,
              href: "/admin/finance"
            }
          ]}
        />
        <div className="flex finance-row">
          <div className="finance-part1 px-2">
            <div className="flex">
              <div className="w-3/5 px-4">
                <div className="card">
                  <div className="flex items-center h-16 border-none py-2  px-6 bg-white">
                    <div className="flex items-center whitespace-no-wrap text-21">
                      Tour sales value
                    </div>
                    <div className="mx-4 flex ml-auto justify-center items-center">
                      {this.state.items.map(elem => {
                        let isActive = this.state.activeLink === elem.name;
                        let navClass = isActive
                          ? "agency_choice_time_btn active border-none cursor-pointer "
                          : " agency_choice_time_btn border-none cursor-pointer ";
                        return (
                          <Link
                            to="#"
                            name={elem["name"]}
                            className={navClass}
                            scrollchor={elem["scrollchor"]}
                            key={elem["key"]}
                            onClick={props =>
                              this.setActive(
                                props.currentTarget.attributes[0].nodeValue
                              )
                            }
                          >
                            {elem["name"]}
                          </Link>
                        );
                      })}
                    </div>
                    <span
                      className="hint--bottom text-center  hint--medium"
                      aria-label="this is a hint"
                    >
                      <button className="btn-icon btn-icon-only btn btn-link">
                        <Info fill="#b3b8bd" className="w-4 h-4" />
                      </button>
                    </span>
                  </div>
                  <div className="p-5 pr-0 pt-0 pb-0 bg-white flex justify-center items-center">
                    <FinanceLineChart />
                  </div>
                </div>
              </div>
              <div className="w-2/5 ">
                <div className="w-full flex card flex-col justify-center h-full bg-white ">
                  <div className="flex items-center h-16 border-none py-2  px-6 bg-white">
                    <div className="flex items-center whitespace-no-wrap text-21">
                      Tour sales value
                    </div>
                    <span
                      className="hint--bottom text-center ml-auto  hint--medium"
                      aria-label="this is a hint"
                    >
                      <button className="btn-icon btn-icon-only btn btn-link">
                        <Info fill="#b3b8bd" className="w-4 h-4" />
                      </button>
                    </span>
                  </div>
                  <FinanceBarChart />
                </div>
                {/* Product sales value */}
              </div>
            </div>
            <div className="flex  ">
              <div className="w-full border-none finance-part1">
                <div className="w-full h-full px-4 pr-0 my-4  ">
                  <div className="flex items-center h-16 border-none py-2 bg-white card px-6">
                    <div className="flex items-center whitespace-no-wrap text-21">
                      Employee payment status
                    </div>
                    <div className="flex ml-auto justify-between items-center">
                      <div className="flex mr-6">
                        <ArrowLeft className="cursor-pointer w-6 h-6 px-1" />
                        <ArrowRight className="cursor-pointer w-6 h-6 px-1" />
                      </div>
                      <p className="agency_choice_time_btn text-18 py-2 shadow-lg border-none cursor-pointer">
                        Update
                      </p>
                    </div>
                  </div>
                  <FinanceTable data={this.state.dataTable} />
                </div>
                {/* tableau */}
              </div>
            </div>
          </div>
          <div className="fin-part1  px-2">
            <div className="flex ">
              <div className="w-1/2">
                <div className=" h-full card-hover cursor-pointer">
                  <FinanceCard data={this.state.dataProductCard} />
                </div>
              </div>
              <div className="w-1/2">
                <div className=" h-full card-hover cursor-pointer">
                  <FinanceCard data={this.state.dataTourCard} />
                </div>
              </div>
            </div>
            <div className="flex card mt-4 mx-2">
              <div className="w-full">
                <div className="w-full card ">
                  <div className="flex items-center h-16 border-none py-2  px-6 bg-white">
                    <div className="flex items-center whitespace-no-wrap text-21">
                      Budget manager
                    </div>
                    <div className="flex ml-auto justify-between items-center">
                      <p className="agency_choice_time_btn text-18 py-2 shadow-lg border-none cursor-pointer">
                        Change plan
                      </p>
                    </div>
                  </div>
                  <div className="px-5 bg-white flex justify-between flex-col">
                    <div className="flex justify-between items-center w-full">
                      <div className="w-1/2 chart-donut">
                        <FinanceDonut />
                      </div>
                      <div className="w-1/2">
                        <div className="scroling-div">
                          {this.state.actions_data.map(action => (
                            <div
                              key={action.key}
                              className="py-2 flex flex-col justify-between items-center"
                            >
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
                      <div className="flex flex-row justify-between items-start w-full">
                        <div className="w-1/2">
                          {this.state.dataTasks
                            .slice(secondColumnStart)
                            .map(item => (
                              <Task
                                key={item.key}
                                name={item.name}
                                date={Element.date}
                              />
                            ))}
                        </div>
                        <div className="w-1/2">
                          {this.state.dataTasks
                            .slice(0, secondColumnStart)
                            .map(item => (
                              <Task
                                key={item.key}
                                name={item.name}
                                date={Element.date}
                              />
                            ))}
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
