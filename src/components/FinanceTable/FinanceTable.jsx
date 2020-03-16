import React, { Component } from "react";
import "./FinanceTable.css";
import { ReactComponent as Dots } from "../GeneralAnalyDashbord/images/ellipsis.svg";
import Img from "../GeneralAnalyDashbord/images/NoPath - Copie (16)@3x.png";

export default class FinanceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="example_wrapper" className="dataTables_wrapper dt-bootstrap4">
        <div className="flex">
          <div className="w-full px-2 scroll-div">
            <table
              style={{ width: "100%" }}
              id="example"
              className="table table-hover table-striped table-bordered dataTable dtr-inline"
              role="grid"
              aria-describedby="example_info"
            >
              <thead>
                <tr role="row">
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabindex="0"
                    aria-controls="example"
                    rowspan="1"
                    colspan="1"
                    style={{ width: "388.2px" }}
                  >
                    <span className="text-sm text-gray-800">Employee</span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabindex="0"
                    aria-controls="example"
                    rowspan="1"
                    colspan="1"
                    style={{ width: "100px" }}
                  >
                    <span className="text-sm text-gray-800">Paying day</span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabindex="0"
                    aria-controls="example"
                    rowspan="1"
                    colspan="1"
                    style={{ width: "100px" }}
                  >
                    <span className="text-sm text-gray-800">Status</span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabindex="0"
                    aria-controls="example"
                    rowspan="1"
                    colspan="1"
                    style={{ width: "50px" }}
                  >
                    <span className="text-sm text-gray-800">Salary</span>
                  </th>
                  <th
                    className="sorting justify-center items-center whitespace-no-wrap"
                    tabindex="0"
                    aria-controls="example"
                    rowspan="1"
                    colspan="1"
                    style={{ width: "50px" }}
                  >
                    <span className="text-sm text-gray-800">Departement</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.map(element => (
                  <tr role="row" className="odd">
                    <td tabindex="0" className="sorting_1">
                      <div className="justify-center items-center flex">
                        <div className="flex p-0 responsive-rate flex-row lg:justify-center items-center sm:flex sm:justify-end sm:flex sm:justify-end">
                          <img src={Img} alt="img" width="40" />
                          <p className="text-center px-2">{element["name"]}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <span>{element["paying_day"]}</span>
                    </td>
                    <td className="text-center">
                      <div className="flex justify-center items-center">
                        <div className="flex justfiy-center flex-row text-center items-center">
                          <div
                            className=" w-2 h-2 flex  rounded-full"
                            style={{
                              backgroundColor:
                                element["status"][0] === "n"
                                  ? "rgb(245, 60, 86)"
                                  : "#2DCE98"
                            }}
                          ></div>
                          <span className="ml-2">{element["status"]}</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <span>${element["salary"]}</span>
                    </td>
                    <td className="text-center">
                      <span>{element["departement"]}</span>
                    </td>
                    <td className="text-center ">
                      <div className="flex justify-center items-center">
                        <Dots
                          className="px-2 w-10 h-10 responsive-icons rot"
                          fill="#707070"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
