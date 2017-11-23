"use strict";

// Libs
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";

// Pages
import SetupRound from "./setup-round";
import SelectPlaces from "./select-places";
import ViewRound from "./view-round";

// Components
let Container = React.createClass({
  render() {
    return (
      <div id="wrap">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

let Header = React.createClass({
  render() {
    return (
      <section id="site_header">
        <p id="branding">welovemariokart</p>
      </section>
    );
  }
});

let Footer = React.createClass({
  render() {
    return (
      <section id="site_footer" className="clearfix">
        <p className="nclud"><a href="http://nclud.com">an nclud creation</a></p>
      </section>
    );
  }
});

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRedirect to="/setup-round" />
        <Route path="/setup-round" component={SetupRound} />
        <Route path="/select-places" component={SelectPlaces} />
        <Route path="/view-round" component={ViewRound} />
      </Route>
    </Router>
  ), document.getElementById("app")
);
