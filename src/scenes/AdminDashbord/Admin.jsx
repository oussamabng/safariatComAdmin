import React, { Component } from "react";

import HeaderAdmin from "../../components/HomeHeader/HeaderAdmin";
import AsideAdmin from "../../components/aside/asideAdmin.jsx";
import "./admin.css";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      show: false
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
  handleAsideToggled() {
    this.setState(prevState => {
      return {
        show: !prevState.show,
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
        <AsideAdmin
          toggle={this.state.toggle}
          clickToggle={() => {
            this.handleToggleClick();
          }}
          active={this.props.active}
        />
        <div
          className={
            this.state.toggle ? "padleft bg-white" : "padleft-sm bg-white"
          }
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
