import React, { Component } from "react";

import HeaderAdmin from "../../components/HomeHeader/HeaderAdmin";
import AsideAdmin from "../../components/aside/asideAdmin.jsx";
import "./admin.css";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <HeaderAdmin show={this.state.show} />
        <AsideAdmin active={this.props.active} />
        <div
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
