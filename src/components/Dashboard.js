import React, { Component } from "react";

import Loading from './Loading';
import Panel from './Panel';

// import React from "react";
import classnames from "classnames";

const data = [
  {
    id: 1,
    label: "Total Photos",
    value: 10
  },
  {
    id: 2,
    label: "Total Topics",
    value: 4
  },
  {
    id: 3,
    label: "User with the most uploads",
    value: "Allison Saeng"
  },
  {
    id: 4,
    label: "User with the least uploads",
    value: 'Lukas Souza'
  }
];


class Dashboard extends Component {
  //It should default to true because the application will start loading data immediately after the components render for the first time
  
  state = {
    loading: false, // false simply disables the loading screen
   
   
    focused: null // When we are in focused mode, we don't want to render four panels; we want to render one
  /* If this.state.focused is null then return true for every panel.
If this.state.focused is equal to the Panel, then let it through the filter.*/
  
  };


  selectPanel(id) {
    this.setState({
     focused: id
    });
   }
  



  render() {

    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
     });

    // When the value of this.state.loading is true we want to render the loading indicator conditionally
    if (this.state.loading) {
      return <Loading />;
    }

 
    // Use the this.state.focused value to filter panel data before converting it to components.
    const panels = (this.state.focused ? data.filter(panel => this.state.focused === panel.id) : data)
    .map(panel => (
     <Panel
      key={panel.id}
      id={panel.id}
      label={panel.label}
      value={panel.value}
      onSelect={this.selectPanel}
     />
    ));
 
    return <main className={dashboardClasses}>{panels}</main>;
  }
}
export default Dashboard;
