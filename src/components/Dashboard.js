import React, { Component } from "react";


// import React from "react";
import classnames from "classnames";


class Dashboard extends Component {
  render() {
    const dashboardClasses = classnames("dashboard");
    return <main className={dashboardClasses} />;
  }
}


// If we wrote the same component without classes, it would perform the equivalent behaviour and return the same value.
// function Dashboard(props) {
//   const dashboardClasses = classnames("dashboard");
//   return <main className={dashboardClasses} />;
// }

export default Dashboard;
