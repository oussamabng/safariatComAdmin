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
      navL: this.props.show
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
    console.log(this.props.show);
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
                className=" mD:w-3/4 lD:w-3/4 sD:3/4 xsD:w-3/4"
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
                    className="xsD:text-11 sD:text-13 mD:text-15 lD:text-21"
                    href="#"
                  >
                    Home
                  </a>
                  <a
                    className="xsD:text-11 sD:text-13 mD:text-15 lD:text-21"
                    href="#"
                  >
                    Create+
                  </a>
                  <a
                    className="xsD:text-11 sD:text-13 mD:text-15 lD:text-21"
                    href="#"
                  >
                    Services
                  </a>
                  <a
                    className="xsD:text-11 sD:text-13 mD:text-15 lD:text-21"
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
                  className="mx-4 cursor-pointer xsD:w-12 xsD:h-12 sD:w-12 sD:h-12 mD:w-12 mD:h-12 lD:h-12 lD:w-12"
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
