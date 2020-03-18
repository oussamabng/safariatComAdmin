import React from "react";
import "hint.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// font awessome Fonts
import "@fortawesome/fontawesome-free/css/all.css";
// Layout Components
// Scenes Components Importation
import Home from "./scenes/Home/Home.jsx";
import Services from "./scenes/Services/Services.jsx";
import Blog from "./scenes/Blog/Blog.jsx";
import Contact from "./scenes/Contact/Contact.jsx";
import About from "./scenes/About/About.jsx";
import Admin from "./scenes/AdminDashbord/Admin";
import HrManagement from "./scenes/HrManagement/HrManagement";
import ToursAndProducts from "./scenes/ToursAndProducts/ToursAndProducts";
import GenerlaAnalystics from "./components/GeneralAnalyDashbord/GenerlaAnalystics";
import UserInteraction from "./components/GeneralAnalyDashbord/UserInteraction";
import Finance from "./components/Finance/Finance.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

import ToursManagement from "./scenes/ToursManagement/ToursManagement";
import ProductsManagement from "./scenes/ProductsManagement/ProductsManagement";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/"></Route>
        <Route component={SearchBar} path="/search"></Route>
        <Route component={Services} path="/services"></Route>
        <Route component={Blog} path="/blog"></Route>
        <Route component={Contact} path="/contact"></Route>
        <Route component={About} path="/about"></Route>
        {/* <Route component={ToursAndProducts} path="/products"></Route> */}
        <Route
          path="/admin/tours"
          render={props => (
            <Admin
              active="Analytics and Statistics"
              content={<GenerlaAnalystics />}
            />
          )}
        />
        {/* Mustapha Routes */}
        <Route
          path="/admin/hr"
          render={props => (
            <Admin active="HR management" content={<HrManagement />} />
          )}
        />

        <Route
          path="/admin/products"
          render={props => (
            <Admin active="HR management" content={<ToursAndProducts />} />
          )}
        />

        <Route
          path="/admin/tmanagement"
          render={props => (
            <Admin active="HR management" content={<ToursManagement />} />
          )}
        />

        <Route
          path="/admin/pmanagement"
          render={props => (
            <Admin active="HR management" content={<ProductsManagement />} />
          )}
        />

        {/* --------------------------------------------- */}
        <Route
          path="/admin/finance"
          render={props => (
            <Admin active="Finance management" content={<Finance />} />
          )}
        />
        <Route
          path="/admin/users"
          render={props => (
            <Admin active="Users interactions" content={<UserInteraction />} />
          )}
        />
        <Redirect from="/admin" to="/admin/tours" />
      </Switch>
    </Router>
  );
}

export default App;
