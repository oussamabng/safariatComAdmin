import React, { Component } from "react";
import "./New.css";
import { ReactComponent as Info } from "../GeneralAnalyDashbord/images/information.svg";
import Img from "../GeneralAnalyDashbord/images/dubai.jpg";
import { ReactComponent as Restart } from "./images/update-arrow.svg";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  restartData() {
    //request of data 
    this.setState({
      data: this.props.data
    })
  }
  render() {
    var { data } = this.state;
    return (
      <div className=" card new-card">
        <div className="card-header-tab card-header">
          <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
            News
          </div>
          <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
            <div className="btn-group dropdown flex justify-center items-center mx-3">
              <a href="#" className="btn-icon btn-icon-only btn btn-link">
                <Restart fill="#b3b8bd" className="info-btn" onClick={() => {
                  this.restartData()
                }} />
              </a>
              {/* here the dropdown div... */}
            </div>
            <div className="btn-group dropdown flex justify-center items-center mx-3">
              <span class="hint--left text-center  hint--medium" aria-label="this is a hint">
                <button className="btn-icon btn-icon-only btn btn-link">
                  <Info fill="#b3b8bd" className="info-btn" />
                </button>
              </span>
              {/* here the dropdown div... */}
            </div>
          </div>
        </div>
        {data.map((data_news) => (
          <div className="rowNews bg-white xl:py-0 lg:py-2 md:py-2 sm:py-2 xs:py-2">
            <div className="bard-body px-4">
              <div className="pt-0 pb-0 bg-white p-3">
                <div className="xl:flex lg:hidden sm:hidden xs:hidden xl:flex-row xl:justify-between xl:items-center xl:p-0 ">
                  <div className="notification-part-left w-1/4">
                    <div className="widget-content">
                      <img
                        className="lg:w-14 lg:h-14  md:w-12 md:h-12 sm:w-10 sm:h-10"
                        src={Img}
                        alt="img"
                      />
                      <div className="all-details-new">
                        <div className="fullname-new">
                          <h1>{data_news["name"]}</h1>
                        </div>
                        <div className="date-new">
                          <p>{data_news["time"]}</p>
                        </div>
                        <div className="my-4 mx-0 full-p text-lg">
                          <p>has added a new {data_news["type"]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="notification-part-right w-3/4">
                    <div className="flex p-6 justify-end items-center w-3/5">
                      <img className="lg:w-64" src={Img} alt="img" />
                    </div>
                  </div>
                </div>
                <div
                  className="xl:hidden py-6 flex flex-col justify-center items-center"
                  style={{
                    backgroundColor: "#f5f5f5"
                  }}
                >
                  <div className="notification-part-left ">
                    <div className=" flex flex-col justify-center items-center">
                      <div className="widget-content">
                        <img
                          className="lg:w-16 lg:h-16  md:w-12 md:h-12 sm:w-10 sm:h-10"
                          src={Img}
                          alt="img"
                        />
                      </div>
                      <h1>{data_news["name"]}</h1>
                      <p className="full-p my-2">has added a new {data_news["type"]}</p>
                      <div className="date-new">
                        <p>{data_news["name"]}</p>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="my-2 w-3/4 flex justify-end items-end">
                    <img src={Img} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        ))}
      </div>
    );
  }
}
export default New;
