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
          icon: Report
        },
        {
          name: "Business",
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

          key: 1,
          icon: Business
        },
        {
          name: "Crm",
          key: 2,
          icon: Crm,
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

          scrollchor: "#about"
        },
        {
          name: "Plus",
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
          name: "Compass",
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
    var sama = this.state.navItems.filter(elm => elm.name === name)[0].visible;
    this.state.navItems.filter(elm => elm.name === name)[0].visible = !sama;

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
              ? "mainAsideAdmin  flex justify-between items-center flex-col"
              : "mainAsideAdminResized  flex justify-between items-center flex-col"
          }
        >
          <div>
            <p>bengoudifa</p>
          </div>
          <div className="mainAsideSection">
            <ul className="flex  justify-end sidebar-menu items-center flex-col">
              {this.state.navItems.map(elm => {
                let isActive = this.state.activeLink === elm.name;
                let navClass = isActive
                  ? "w-full pad-logout"
                  : this.props.toggle
                  ? "w-full pad-logout"
                  : "w-full pad-logout";
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
                            : "flex justify-center items-center"
                          : "flex justify-center items-center "
                      }
                    >
                      <Link className="flex justify-center items-center  pad-a">
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
                      <span
                        className={
                          this.props.toggle ? "flex ml-auto" : "hidden"
                        }
                      >
                        <i className="fa fa-angle-left pull-right"></i>
                      </span>
                    </div>
                    <ul
                      key={elm["key"].toString()}
                      className={
                        elm.visible
                          ? "treeview-menu h-auto"
                          : "treeview-menu hid"
                      }
                    >
                      {elm.options.map(opt => {
                        return (
                          <li>
                            <Link to={elm.scrollchor}>
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
