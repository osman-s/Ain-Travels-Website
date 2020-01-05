import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Contact from "./components/contact";
import About from "./components/about";
import Umrah from "./components/umrah";
import Hajj from "./components/hajj";
import Home from "./components/home";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  state = {
    SideDrawerOpen: false,
    user: ""
  };

  ToggleDrawer = () => {
    this.setState(prevState => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };
  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        {this.state.SideDrawerOpen ? <SideDrawer
            show={this.state.SideDrawerOpen}
            ToggleDrawer={this.ToggleDrawer}
          /> : <Toolbar ToggleDrawer={this.ToggleDrawer} />}
        <main className="container">
          <Switch>
            {/* <Route path="/projectissues" component={ProjectIssues} /> */}
            <Route
              path="/Contact"
              render={props => (
                <Contact {...props} user={this.state.user} />
                )}
            />
            <Route
              path="/about"
              render={props => (
                <About {...props} user={this.state.user} />
                )}
            />
            <Route
                  path="/umrah"
                  render={props => (
                    <Umrah {...props} user={this.state.user} />
                  )}
            />
            <Route
              path="/hajj"
              render={props => (
                <Hajj {...props} user={this.state.user} />
              )}
            />
            <Route
              path="/"
              render={props => (
                <Home {...props} user={this.state.user} />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            {/* <Redirect from="/" exact to="/issuetracker" /> */}
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

