import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import "../style/main.scss"

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioManager from "./pages/portfolio-manager";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

import AddSub from "./practiceProjects/add-sub";
import HelloGoodbye from "./practiceProjects/hello-goodbye";
import GrowShrink from "./practiceProjects/grow-shrink";
import Peekaboo from "./practiceProjects/peekaboo";
import AlignMe from "./practiceProjects/align-me";
import Clock from "./practiceProjects/clock";
import HTMLColor from "./practiceProjects/html-color";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios.get("https://api.devcamp.space/logged_in", {
      withCredentials: true
    }).then(response => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus;

      // If loggedIn and status LOGGED_IN => return data
      // If loggedIn status NOT_LOGGED_IN => update state
      // If not loggedIn and status LOGGED_IN => update state (log out)

      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        })
      } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        })
      }
    })
    .catch(error => {
      console.log("Error", error);
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
      <Route key="portfolio-manager" path="/portfolio-manager" component={PortfolioManager} />
    ]
  }
  
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer
              loggedInStatus={this.state.loggedInStatus}
              handleSuccessfulLogout={this.handleSuccessfulLogout}
            />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/auth"
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
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