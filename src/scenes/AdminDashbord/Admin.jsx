import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";

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
        <Router>
          <Route component={UserInteraction} path="/admin/users"></Route>
          <Route component={GenerlaAnalystics} path="/admin/tours"></Route>
        </Router>{" "}
      </>
    );
  }
}

export default Admin;
