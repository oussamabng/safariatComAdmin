import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Scenes Components Importation
import Home from "./scenes/Home/Home.jsx";
import Services from "./scenes/Services/Services.jsx";
import Blog from "./scenes/Blog/Blog.jsx";
import Contact from "./scenes/Contact/Contact.jsx";
import About from "./scenes/About/About.jsx";
import SignUp from "./scenes/SignUp/SignUp.jsx";
import LearnMore from "./scenes/LearnMore/LearnMore.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Home} exact path="/"></Route>
        <Route component={Services} path="/services"></Route>
        <Route component={Blog} path="/blog"></Route>
        <Route component={Contact} path="/contact"></Route>
        <Route component={About} path="/about"></Route>
        <Route component={SignUp} path="/signup"></Route>
        <Route component={LearnMore} path="/learnmore"></Route>
      </Switch>
    </Router>
  );
}

export default App;
