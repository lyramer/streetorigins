import React, { Component } from "react";
import "./style/App.css";
import "./style/Popup.css";
import StreetsMap from "./components/StreetsMap";
import Header from "./components/Header";
import AboutModal from "./components/modals/AboutModal";
import ContactModal from "./components/modals/ContactModal";
import AnalyticModal from "./components/modals/AnalyticModal";
import LoginModal from "./components/modals/LoginModal";

const DEFAULT_VIEWPORT = {
  center: [48.441903, -123.371643],
  zoom: 13
};

const mapContainerStyle = {
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
      },
      aboutModal: false,
      contactModal: false,
      analyticModal: false,
      loginModal: false
    };
  }

  toggleAboutModal = () => {
    this.setState({
      aboutModal: !this.state.aboutModal
    });
  };

  toggleContactModal = () => {
    this.setState({
      contactModal: !this.state.contactModal
    });
  };

  toggleAnalyticModal = () => {
    this.setState({
      analyticModal: !this.state.analyticModal
    });
  };

  toggleLoginModal = () => {
    this.setState({
      loginModal: !this.state.loginModal
    });
  };

  resetView = () => {
    this.setState({ viewport: DEFAULT_VIEWPORT });
  };
  render() {
    return (
      <div id="page">
        <AboutModal
          toggle={() => {
            this.toggleAboutModal();
          }}
          show={this.state.aboutModal}
        />
        <ContactModal
          toggle={() => {
            this.toggleContactModal();
          }}
          show={this.state.contactModal}
        />
        <AnalyticModal
          toggle={() => {
            this.toggleAnalyticModal();
          }}
          show={this.state.analyticModal}
        />
        <LoginModal
          toggle={() => {
            this.toggleLoginModal();
          }}
          show={this.state.loginModal}
        />
        <Header
          toggleAboutModal={this.toggleAboutModal}
          toggleContactModal={this.toggleContactModal}
          toggleAnalyticModal={this.toggleAnalyticModal}
          toggleLoginModal={this.toggleLoginModal}
        />
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
