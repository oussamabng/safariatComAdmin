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
/*import SignUp from "./scenes/SignUp/SignUp.jsx";
import LearnMore from "./scenes/LearnMore/LearnMore.jsx";*/
function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/"></Route>
        <Route component={Services} path="/services"></Route>
        <Route component={Blog} path="/blog"></Route>
        <Route component={Contact} path="/contact"></Route>
        <Route component={About} path="/about"></Route>
        <Route component={HrManagement} path="/hr"></Route>
        <Route component={ToursAndProducts} path="/products"></Route>
        <Route
          path="/admin/tours"
          render={props => (
            <Admin active="Report" content={<GenerlaAnalystics />} />
          )}
        />
        <Route
          path="/admin/finance"
          render={props => <Admin active="Compass" content={<Finance />} />}
        />
        <Route
          path="/admin/users"
          render={props => (
            <Admin active="Report" content={<UserInteraction />} />
          )}
        />
        <Redirect from="/admin" to="/admin/tours" />
      </Switch>
    </Router>
  );
}

export default App;
