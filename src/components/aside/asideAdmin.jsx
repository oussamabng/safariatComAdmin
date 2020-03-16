import React, { Component } from "react";
import "./asideAdmin.css";
import AsideSvg from "./images/AsideSvg.png";
import Report from "./images/report.svg";
import Business from "./images/business-and-finance.svg";
import Crm from "./images/crm.svg";
import Plus from "./images/plus.svg";
import Compass from "./images/compass.svg";
import { ReactComponent as Logout } from "./images/logout(1).svg";
import { Link } from "react-router-dom";
class AsideAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          name: 'Report',
          key: 0,
          icon: Report,
          scrollChor: '/admin/tours',
        },
        {
          name: 'Business',
          key: 1,
          icon: Business,
          scrollChor: '/hr',
        },
        {
          name: 'Crm',
          key: 2,
          icon: Crm,

          scrollChor: '#about',
        },
        {
          name: 'Plus',
          key: 3,
          icon: Plus,

          scrollChor: '#contact',
        }, {
          name: "Compass",
          key: 4,
          icon: Compass,

          scrollChor: "#compass"
        }
      ],
      activeLink: 'Report'
    };
  };
  setActive = (link) => this.setState({ activeLink: link });
  render() {

    return (
      <>
        <aside className="mainAsideAdmin flex justify-end items-center flex-col">
          <div className="mainAsideSection my-10">
            <ul className="flex justify-end items-center flex-col pt-20">
              {this.state.navItems.map((elm) => {
                let isActive = this.state.activeLink === elm.name;
                let navClass = isActive ? 'active-sidebar my-5 w-full py-1' : 'my-5 w-full py-1'
                return (
                  <li onClick={(props) => this.setActive(props.currentTarget.attributes[0].nodeValue)} name={elm.name} key={elm.key} className={navClass}>
                    <Link to={elm.scrollChor}>
                      <img
                        className="ml-auto mr-auto logout-btn"
                        src={elm.icon}
                        alt="Report"
                      />
                    </Link>
                  </li>
                )
              })}
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
