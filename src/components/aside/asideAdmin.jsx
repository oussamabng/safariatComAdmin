import React, { Component } from "react";
import "./asideAdmin.css";
import Report from "./images/report.png";
import Business from "./images/business-and-finance.png";
import Crm from "./images/crm.png";
import Plus from "./images/plus.png";
import Logout from "./images/logout.png";
import Compass from "./images/compass.png";

import { Link } from "react-router-dom";
class AsideAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          name: "Report",
          options: [
            {
              name: ["Tours booking & products", "Users interactions"],
              visible: false
            }
          ],
          key: 0,
          icon: Report,
          scrollchor: "/admin/tours"
        },
        {
          name: "Business",
          options: [
            {
              name: ["Employees managements ", "Tasks managements"],
              visible: false
            }
          ],
          key: 1,
          icon: Business,
          scrollchor: "/hr"
        },
        {
          name: "Crm",
          key: 2,
          icon: Crm,
          options: [
            {
              name: ["Crm managements "],
              visible: false
            }
          ],

          scrollchor: "#about"
        },
        {
          name: "Plus",
          options: [
            {
              name: ["Tours managements ", "Products managements"],
              visible: false
            }
          ],
          key: 3,
          icon: Plus,

          scrollchor: "#contact"
        },
        {
          name: "Compass",
          options: [
            {
              name: ["Finance management"],
              visible: false
            }
          ],
          key: 4,
          icon: Compass,

          scrollchor: "/admin/finance"
        }
      ],
      activeLink: this.props.active
    };
  }
  setActive = link => console.log(link);
  render() {
    return (
      <>
        <aside
          className={
            this.props.toggle
              ? "mainAsideAdmin push-menu flex justify-end items-center flex-col"
              : "mainAsideAdminResized push-menu flex justify-end items-center flex-col"
          }
        >
          <div className="mainAsideSection">
            {this.state.navItems.map(elm => {
              let isActive = this.state.activeLink === elm.name;
              let navClass = isActive
                ? "w-full pad-logout"
                : this.props.toggle
                ? "w-full pad-logout"
                : "w-full pad-logout";
              return (
                <ul
                  key={elm.key}
                  className="flex  justify-end sidebar-menu items-center flex-col"
                >
                  <li
                    onClick={props =>
                      this.setActive(props.currentTarget.attributes)
                    }
                    name={elm.name}
                    className={navClass}
                  >
                    <div
                      className={
                        this.props.toggle
                          ? isActive
                            ? "flex justify-center items-center active-sidebar"
                            : "flex justify-center items-center"
                          : "flex justify-center items-center "
                      }
                    >
                      <Link
                        className="flex justify-center items-center  pad-a"
                        to={elm.scrollchor}
                      >
                        <img
                          className="logout-btn"
                          src={elm.icon}
                          alt="Report"
                        />
                        <span
                          className={
                            this.props.toggle ? "text-white ml-2" : "hidden"
                          }
                        >
                          {elm["name"]}
                        </span>
                      </Link>
                      <span className={this.props.toggle ? "flex" : "hidden"}>
                        <i className="fa fa-angle-left pull-right"></i>
                      </span>
                    </div>
                    {elm.options.map(opt => (
                      <ul
                        key={elm["key"].toString()}
                        className={opt.visible ? "treeview-menu" : "hidden"}
                      >
                        <li>
                          <Link to="#">
                            <i className="fa fa-circle-o"></i>
                            {opt.name}
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </li>
                </ul>
              );
            })}
          </div>

          <div className="flex justify-center pad-logout w-full items-center m  -4">
            <Link className="flex justify-center  items-center pad-a" to="#">
              <img className="logout-btn" src={Logout} alt="logout" />
              <span className="text-white ml-2">Logout</span>
            </Link>
          </div>
        </aside>
      </>
    );
  }
}

export default AsideAdmin;
