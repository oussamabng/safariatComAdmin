import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './components/Header/Header';
// Scenes Components Importation
import Home from './scenes/Home/Home.jsx';
import Services from './scenes/Services/Services.jsx';
import Blog from './scenes/Blog/Blog.jsx';
import Contact from './scenes/Contact/Contact.jsx';
import About from './scenes/About/About.jsx';

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-40">
        <Switch>
          <Route component={Home} exact path="/" ></Route>
          <Route component={Services} path="/services" ></Route>
          <Route component={Blog} path="/blog" ></Route>
          <Route component={Contact} path="/contact" ></Route>
          <Route component={About} path="/about" ></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
