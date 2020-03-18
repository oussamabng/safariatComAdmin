import React, { Component } from "react";
import "./HeaderAdmin.css";
import Notification from "./images/notifications.svg";
import Logo from "./images/logoForWeb.png";
import SearchBar from "../SearchBar/SearchBar.jsx";
import NotificationBox from "../NotificationsBox/NotificationsBox.jsx";
class HeaderAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      navL: false
    };
  }
  showNotifications() {
    this.setState({
      show: !this.state.show
    });
  }
  handleLogo() {
    this.setState(prevState => {
      return {
        ...prevState,
        navL: !prevState.navL
      };
    });
    this.props.clickToggle();
  }
  render() {
    return (
      <>
        <div className="main_header_admin ">
          <nav
            className={
              this.state.navL
                ? "navbar_header_admin"
                : "navbar_header_admin res"
            }
          >
            <div className="flex items-center nav-h">
              <a
                className=" mD:w-1/2 lD:w-3/4"
                href="#"
                onClick={() => {
                  this.handleLogo();
                }}
              >
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <div className="partLeft">
              <SearchBar />
              <div className="middlePart">
                <div className="buttons_nav">
                  <a
                    className="xsD:text-9 sD:text-11 mD:text-13 lD:text-18"
                    href="#"
                  >
                    Home
                  </a>
                  <a
                    className="xsD:text-9 sD:text-11 mD:text-13 lD:text-18"
                    href="#"
                  >
                    Create+
                  </a>
                  <a
                    className="xsD:text-9 sD:text-11 mD:text-13 lD:text-18"
                    href="#"
                  >
                    Services
                  </a>
                  <a
                    className="xsD:text-9 sD:text-11 mD:text-13 lD:text-18"
                    href="#"
                  >
                    Support
                  </a>
                </div>
              </div>
            </div>
            <div className="ml-auto flex flex-row justify-center items-center">
              <div className="flex flex-col relative items-end">
                <p
                  href="#"
                  className="mx-4 cursor-pointer lD:h-12 lD:w-12"
                  onClick={() => {
                    this.showNotifications();
                  }}
                >
                  <img src={Notification} alt="notification" />
                </p>
                <div
                  className={
                    this.state.show
                      ? "notification-box mx-6"
                      : "notification-box hidden mx-6"
                  }
                >
                  <NotificationBox />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default HeaderAdmin;
