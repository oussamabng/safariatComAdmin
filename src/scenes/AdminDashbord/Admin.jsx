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
        <HeaderAdmin />
        <AsideAdmin />
        {this.props.content}
      </>
    );
  }
}

export default Admin;
