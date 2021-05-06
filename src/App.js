import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Custom File import
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact"
import Team from "./pages/Team";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Service";
import Single from "./pages/Single";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/single" component={Single} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
