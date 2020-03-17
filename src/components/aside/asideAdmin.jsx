import React, { Component } from "react";
import "./asideAdmin.css";
import Report from "./images/report.png";
import Business from "./images/business-and-finance.png";
import Crm from "./images/crm.png";
import Plus from "./images/plus.png";
import Logout from "./images/logout.png";
import Compass from "./images/compass.png";
import Ouss from "../HomeHeader/images/ouss.jpg";

import { Link } from "react-router-dom";
class AsideAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          name: "Analytics and Statistics",
          options: [
            {
              name: "Tours booking & products",
              scrollchor: "/admin/tours"
            },
            {
              name: "Users interactions",
              scrollchor: "/admin/users"
            }
          ],
          visible: false,
          key: 0,
          icon: Report,
          scrollchor: "/admin/tours"
        },
        {
          name: "HR management",
          options: [
            {
              name: "Employees managements ",
              scrollchor: "/admin/hr"
            },
            {
              name: "Tasks managements",
              scrollchor: "/admin/hr"
            }
          ],
          visible: false,
          scrollchor: "/admin/hr",
          key: 1,
          icon: Business
        },
        {
          name: "Travel & product management",
          key: 2,
          icon: Crm,
          options: [
            {
              name: "Tours managements ",
              scrollchor: "/admin/tours"
            },
            {
              name: "products managements",
              scrollchor: "/admin/users"
            }
          ],
          visible: false,
          scrollchor: "#about"
        },
        {
          name: "Travel and product CRM",
          options: [
            {
              name: "Tours booking & products",
              scrollchor: "/admin/tours"
            },
            {
              name: "Users interactions",
              scrollchor: "/admin/users"
            }
          ],
          visible: false,

          key: 3,
          icon: Plus,

          scrollchor: "#contact"
        },
        {
          name: "Finance management",
          options: [
            {
              name: "Finance management",
              scrollchor: "/admin/finance"
            }
          ],
          visible: false,

          key: 4,
          icon: Compass,

          scrollchor: "/admin/finance"
        }
      ],
      activeLink: this.props.active
    };
  }
  setActive = link => {
    const name = link[0].nodeValue;
    const key = this.state.navItems.filter(elm => elm.name === name)[0].key;
    var sama = this.state.navItems.filter(elm => elm.name === name)[0].visible;
    this.state.navItems.filter(elm => elm.name === name)[0].visible = !sama;
    console.log();

    this.state.navItems
      .filter(elm => elm.name !== name)
      .map(item => {
        item.visible = false;
      });
    this.setState({ activeLink: link[0].nodeValue });
  };
  render() {
    return (
      <>
        <aside
          className={
            this.props.toggle
              ? "mainAsideAdmin  flex  justify-between items-center flex-col"
              : "mainAsideAdminResized  flex justify-between items-center flex-col"
          }
        >
          <div className="flex justify-between w-full  items-center flex-col">
            <div className="flex justify-center w-full flex-col items-center py-6 px-2">
              <p href="#" className="nameAdmin w-full flex justify-center">
                <img
                  className={this.props.toggle ? "mr-2" : ""}
                  src={Ouss}
                  alt="usernamePhoto"
                />
                <div className="flex  flex-col justify-center items-start">
                  <span
                    className={
                      this.props.toggle
                        ? "text-white text-sm whitespace-no-wrap font-medium hide-dis"
                        : "text-white text-sm whitespace-no-wrap font-medium hide-dis ok"
                    }
                  >
                    Oussama Bengoudifa
                  </span>
                  <p
                    className={
                      this.props.toggle
                        ? "text-white font-light text-xxs  whitespace-no-wrap hide-dis"
                        : "text-white font-light text-xxs  whitespace-no-wrap hide-dis ok"
                    }
                  >
                    CEO of travel agency
                  </p>
                </div>
              </p>
            </div>
            <div className="mainAsideSection h-full flex w-full">
              <ul className="flex  justify-end sidebar-menu items-center flex-col w-full">
                {this.state.navItems.map(elm => {
                  let isActive = this.state.activeLink === elm.name;
                  let navClass = isActive
                    ? "w-full pad-logout my-4"
                    : this.props.toggle
                    ? "w-full pad-logout my-4 pl-2"
                    : "w-full pad-logout justify-center my-4";
                  return (
                    <li
                      key={elm.key}
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
                              : "flex justify-center items-center  "
                            : isActive
                            ? "flex justify-center items-center   active-sidebar"
                            : "flex justify-center items-center"
                        }
                      >
                        <Link
                          className={
                            this.props.toggle
                              ? "flex justify-center items-center mr-auto pad-a"
                              : "flex justify-center items-center w-full pad-a"
                          }
                        >
                          <img
                            className="logout-btn"
                            src={elm.icon}
                            alt="Report"
                          />
                          <span
                            className={
                              this.props.toggle
                                ? "text-white ml-2 whitespace-pre-line  hide-dis"
                                : "text-white hide-dis ok "
                            }
                          >
                            {elm["name"]}
                          </span>
                        </Link>
                      </div>
                      <ul
                        key={elm["key"].toString()}
                        className={
                          elm.visible
                            ? this.props.toggle
                              ? "treeview-menu h-auto"
                              : "hidden"
                            : "treeview-menu hid"
                        }
                      >
                        {elm.options.map(opt => {
                          return (
                            <li>
                              <Link to={opt.scrollchor}>
                                <i className="fa fa-circle-o"></i>
                                {opt.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex  pl-2 justify-start pad-logout w-full items-center ">
            <Link className="flex justify-center  items-center pad-a" to="#">
              <img className="logout-btn" src={Logout} alt="logout" />
              <span
                className={
                  this.props.toggle
                    ? "text-white ml-2 pl-px hide-dis"
                    : "hide-dis ok"
                }
              >
                Logout
              </span>
            </Link>
          </div>
        </aside>
      </>
    );
  }
}

export default AsideAdmin;
