import React, { Component } from "react";
import "./style/App.css";
import "./style/Popup.css";
import IntroModal from "./components/Modal";
import StreetsMap from "./components/StreetsMap";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const DEFAULT_VIEWPORT = {
  center: [48.441903, -123.371643],
  zoom: 13
};

const mapContainerStyle = {
  marginTop: "64px",
  position: "relative"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorStyle: { cursor: "grab" },
      viewport: {
        center: [48.421203, -123.367443],
        zoomControl: false,
        zoom: 14,
        maxZoom: 19,
        minZoom: 11,
        legends: true,
        infoControl: false,
        attributionControl: true
      }
    };
  }
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  resetView = () => {
    this.setState({ viewport: DEFAULT_VIEWPORT });
  };

  render() {
    return (
      <div id="page">
        <div className={"mapContainer"} style={mapContainerStyle}>
          <StreetsMap
            viewport={this.state.viewport}
            mapCursor={this.state.cursorStyle}
          />
        </div>
      </div>
    );
  }
}

export default App;
