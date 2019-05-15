import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../style/main.scss"

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match";

import AddSub from "./practiceProjects/add-sub";
import HelloGoodbye from "./practiceProjects/hello-goodbye";
import GrowShrink from "./practiceProjects/grow-shrink";
import Peekaboo from "./practiceProjects/peekaboo";
import AlignMe from "./practiceProjects/align-me";
import Clock from "./practiceProjects/clock";
import HTMLColor from "./practiceProjects/html-color";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/portfolio/:slug" component={PortfolioDetail} />

              <Route path="/add-sub" component={AddSub} />
              <Route path="/hello-goodbye" component={HelloGoodbye} />
              <Route path="/grow-shrink" component={GrowShrink} />
              <Route path="/peekaboo" component={Peekaboo} />
              <Route path="/align-me" component={AlignMe} />
              <Route path="/clock" component={Clock} />
              <Route path="/html-color" component={HTMLColor} />
              <Route component={NoMatch} />
            </Switch>

          </div>

        </Router>

      </div>      
    );

  }
}