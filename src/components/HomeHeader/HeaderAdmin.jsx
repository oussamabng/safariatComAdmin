import React, { Component } from "react";
import "./HeaderAdmin.css";
import Notification from "./images/notifications.svg";
import Logo from "./images/logoForWeb.png";
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
              !this.state.navL
                ? "navbar_header_admin"
                : "navbar_header_admin res"
            }
          >
            <div className="flex items-center nav-h">
              <a
                className="w-3/4"
                href="#"
                onClick={() => {
                  this.handleLogo();
                }}
              >
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <div className="partLeft">
              <div className="search_admin-v input-group">
                <span className="input-group-btn">
                  <button className="btn btn-flat" type="submit" name="search">
                    <i className="fontSearch fa fa-search "></i>
                  </button>
                </span>
                <input
                  type="text"
                  className="form-control inputSearch"
                  placeholder="Search for Something ..."
                />
              </div>
              <div className="middlePart">
                <div className="buttons_nav">
                  <a className="active" href="#">
                    Home
                  </a>
                  <a href="#">Create+</a>
                  <a href="#">Services</a>
                  <a href="#">Support</a>
                </div>
              </div>
            </div>
            <div className="ml-auto flex flex-row justify-center items-center">
              <div className="flex flex-col relative items-end">
                <p
                  href="#"
                  className="notification_admin mx-4"
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
