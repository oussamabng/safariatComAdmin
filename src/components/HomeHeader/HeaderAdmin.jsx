import React, { Component } from "react";
import "./HeaderAdmin.css";
import Notification from "./images/notifications.svg";
import Ouss from "./images/ouss.jpg";
import Logo from "./images/logo.png";

class HeaderAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  if(clicked) {}
  render() {
    return (
      <>
        <div className="main_header_admin">
          <nav className="navbar_header_admin ">
            <div className="logo-navbar">
              <img src={Logo} alt="logo" />
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
                  <a href="#">Settings</a>
                </div>
              </div>
            </div>
            <div className="ml-auto flex flex-row justify-center items-center">
              <a href="#" className="nameAdmin">
                <img src={Ouss} alt="usernamePhoto" />
                <div className="flexCol flex flex-col justify-center items-start">
                  <span>@username</span>
                  <h3>-CEO of travel agency</h3>
                </div>
              </a>
              <a href="#" className="notification_admin mx-6">
                <img src={Notification} alt="notification" />
              </a>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default HeaderAdmin;
