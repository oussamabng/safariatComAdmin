import React, { Component } from "react";
import "./asideAdmin.css";
import AsideSvg from "./images/AsideSvg.png";
import Report from "./images/report.svg";
import Business from "./images/business-and-finance.svg";
import Crm from "./images/crm.svg";
import Plus from "./images/plus.svg";
import Compass from "./images/compass.svg";
import { ReactComponent as Logout } from "./images/logout(1).svg";

class AsideAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <aside className="mainAsideAdmin flex justify-end items-center flex-col">
          <div className="mainAsideSection my-10">
            <ul className="flex justify-end items-center flex-col pt-20">
              <li className="active-sidebar my-5 py-1  w-full">
                <a href="#">
                  <img
                    className="ml-auto mr-auto logout-btn"
                    src={Report}
                    alt="Report"
                  />
                </a>
              </li>
              <li className="my-5 w-full py-1">
                <a href="#">
                  <img
                    className="ml-auto mr-auto logout-btn"
                    src={Business}
                    alt="Report"
                  />
                </a>
              </li>
              <li className="my-5 w-full py-1">
                <a href="#">
                  <img
                    className="logout-btn ml-auto mr-auto"
                    src={Crm}
                    alt="Report"
                  />
                </a>
              </li>
              <li className="my-5 w-full py-1">
                <a href="#">
                  <img
                    className="logout-btn ml-auto mr-auto"
                    src={Plus}
                    alt="Report"
                  />
                </a>
              </li>
              <li className="my-5 w-full py-1">
                <a href="#">
                  <img
                    className="logout-btn ml-auto mr-auto"
                    src={Compass}
                    alt="Report"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="my-5 px-5 py-2">
            <a href="#">
              <Logout className="w-8 ml-auto mr-auto" fill="white" />
            </a>
          </div>
        </aside>
      </>
    );
  }
}

export default AsideAdmin;
