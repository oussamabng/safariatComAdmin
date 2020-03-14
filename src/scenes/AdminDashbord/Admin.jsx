import React, { Component } from "react";

import HeaderAdmin from "../../components/Header/HeaderAdmin";
import AsideAdmin from "../../components/aside/asideAdmin.jsx";
import GenerlaAnalystics from "../../components/GeneralAnalyDashbord/GenerlaAnalystics.jsx";
import "./admin.css";
import UserInteraction from "../../components/GeneralAnalyDashbord/UserInteraction.jsx";
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
