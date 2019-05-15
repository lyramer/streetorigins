import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import StreetTypes from "./StreetTypes";
import StreetOrigins from "./StreetOrigins";
import StreetOccs from "./StreetOccs";
import data from "../../data/analytics.json";

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Victoria",
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggleCity(cityName) {
    console.log("changing to " + cityName);
    this.setState(prevState => ({
      // dropdownOpen: false,
      city: cityName
    }));
  }

  render() {
    return (
      <div className="analytics">
        <div className="header">
          <h1>Street Analytics</h1>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {data[this.state.city].name.long}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => this.toggleCity("Victoria")}>
                City of Victoria
              </DropdownItem>
              <DropdownItem onClick={() => this.toggleCity("OakBay")}>
                Oak Bay
              </DropdownItem>
              <DropdownItem onClick={() => this.toggleCity("Esquimalt")}>
                Township of Esquimalt
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <StreetTypes data={data[this.state.city].types} />
        <StreetOrigins data={data[this.state.city].origins} />
        <StreetOccs data={data[this.state.city].occs} />
      </div>
    );
  }
}

export default Analytics;
