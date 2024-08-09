import React, { Component } from "react";

import Loading from './Loading';

// import React from "react";
import classnames from "classnames";


class Dashboard extends Component {
  //It should default to true because the application will start loading data immediately after the components render for the first time
  
  state = {
    loading: true
  };

  render() {
    const dashboardClasses = classnames("dashboard");

    // When the value of this.state.loading is true we want to render the loading indicator conditionally
    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses} />;
  }
}
export default Dashboard;
