import React, { Component } from "react";
import "./New.css";
import { ReactComponent as Info } from "../GeneralAnalyDashbord/images/information.svg";
import Img from "../GeneralAnalyDashbord/images/dubai.jpg";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, time, type } = this.props;
    return (
      <div className=" card new-card">
        <div className="card-header-tab card-header">
          <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
            News
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
        <div className="rowNews">
          <div className="bard-body p-0">
            <div className="p-3 product-details">
              <div className="notification-new">
                <div className="notification-part-left">
                  <div className="widget-content">
                    <img className="imgStyle" src={Img} alt="img" />
                    <div className="all-details-new">
                      <div className="fullname-new">
                        <h1>{name}</h1>
                        <p>has added a new {type}</p>
                      </div>
                      <div className="date-new">
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notification-part-right">
                  <img src={Img} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="bard-body p-0">
            <div className="p-3 product-details">
              <div className="notification-new">
                <div className="notification-part-left">
                  <div className="widget-content">
                    <img className="imgStyle" src={Img} alt="img" />
                    <div className="all-details-new">
                      <div className="fullname-new">
                        <h1>{name}</h1>
                        <p>has added a new {type}</p>
                      </div>
                      <div className="date-new">
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notification-part-right">
                  <img src={Img} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="bard-body p-0">
            <div className="p-3 product-details">
              <div className="notification-new">
                <div className="notification-part-left">
                  <div className="widget-content">
                    <img className="imgStyle" src={Img} alt="img" />
                    <div className="all-details-new">
                      <div className="fullname-new">
                        <h1>{name}</h1>
                        <p>has added a new {type}</p>
                      </div>
                      <div className="date-new">
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notification-part-right">
                  <img src={Img} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="bard-body p-0">
            <div className="p-3 product-details">
              <div className="notification-new">
                <div className="notification-part-left">
                  <div className="widget-content">
                    <img className="imgStyle" src={Img} alt="img" />
                    <div className="all-details-new">
                      <div className="fullname-new">
                        <h1>{name}</h1>
                        <p>has added a new {type}</p>
                      </div>
                      <div className="date-new">
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notification-part-right">
                  <img src={Img} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="bard-body p-0">
            <div className="p-3 product-details">
              <div className="notification-new">
                <div className="notification-part-left">
                  <div className="widget-content">
                    <img className="imgStyle" src={Img} alt="img" />
                    <div className="all-details-new">
                      <div className="fullname-new">
                        <h1>{name}</h1>
                        <p>has added a new {type}</p>
                      </div>
                      <div className="date-new">
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notification-part-right">
                  <img src={Img} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="bard-body p-0">
            <div className="p-3 product-details">
              <div className="notification-new">
                <div className="notification-part-left">
                  <div className="widget-content">
                    <img className="imgStyle" src={Img} alt="img" />
                    <div className="all-details-new">
                      <div className="fullname-new">
                        <h1>{name}</h1>
                        <p>has added a new {type}</p>
                      </div>
                      <div className="date-new">
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notification-part-right">
                  <img src={Img} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="bard-body p-0">
            <div className="p-3 product-details">
              <div className="notification-new">
                <div className="notification-part-left">
                  <div className="widget-content">
                    <img className="imgStyle" src={Img} alt="img" />
                    <div className="all-details-new">
                      <div className="fullname-new">
                        <h1>{name}</h1>
                        <p>has added a new {type}</p>
                      </div>
                      <div className="date-new">
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notification-part-right">
                  <img src={Img} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="bard-body p-0">
            <div className="p-3 product-details">
              <div className="notification-new">
                <div className="notification-part-left">
                  <div className="widget-content">
                    <img className="imgStyle" src={Img} alt="img" />
                    <div className="all-details-new">
                      <div className="fullname-new">
                        <h1>{name}</h1>
                        <p>has added a new {type}</p>
                      </div>
                      <div className="date-new">
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notification-part-right">
                  <img src={Img} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default New;
