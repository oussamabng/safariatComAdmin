import React, { Component } from "react";

import HeaderAdmin from "../../components/HomeHeader/HeaderAdmin";
import AsideAdmin from "../../components/aside/asideAdmin.jsx";
import "./admin.css";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }
  handleToggleClick() {
    this.setState(prevState => {
      return {
        ...prevState,
        toggle: !prevState.toggle
      };
    });
  }
  render() {
    return (
      <>
        <HeaderAdmin
          clickToggle={() => {
            this.handleToggleClick();
          }}
          show={this.state.show}
        />
        <AsideAdmin toggle={this.state.toggle} active={this.props.active} />
        <div
          className={this.state.toggle ? "padleft" : "padleft-sm"}
          onClick={() => {
            document.getElementsByClassName(
              "notification-box mx-6"
            )[0].style.display = "none";
          }}
        >
          {this.props.content}
        </div>
      </>
    );
  }
}

export default Admin;
