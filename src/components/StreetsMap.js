import React, { Component } from "react";
import { Map, TileLayer, ScaleControl, GeoJSON } from "react-leaflet";
import { mapboxAccessToken } from "../mapboxAccessToken.json";
import { FeatureList } from "../data/victoria.json";
import { fetchOrigin, fetchStory } from "../helpers.js";
import { withFirebase } from "./Firebase";

class StreetsMap extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      streets: []
    };
  }
  getStyle(feature, layer) {
    return {
      color: "#006400",
      weight: 14,
      opacity: 0
    };
  }

  getStreets() {
    //if (this.props.analytics) return Vic;
    return FeatureList;
  }

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   this.props.firebase.FeatureList().on("value", snapshot => {
  //     const featureObject = snapshot.val();
  //     console.log(featureObject);
  //     const streets = Object.keys(featureObject).map(key => ({
  //       ...featureObject[key],
  //       type: key
  //     }));

  //     this.setState({
  //       streets: streets,
  //       loading: false
  //     });
  //   });
  // }

  // componentWillUnmount() {
  //   this.props.firebase.FeatureList().off();
  // }

  onViewportChanged = viewport => {
    console.log("Zoom level: " + this.props.viewport.zoom);
  };

  onEachFeature = (feature, layer) => {
    const { name, origin, story } = feature.properties;
    layer.bindPopup(
      "<div class='popup-header'>" +
        "<h3>" +
        name +
        "</h3>" +
        fetchOrigin(origin) +
        "</div>" +
        "<div class='popup-body'>" +
        fetchStory(story) +
        "</div>",
      {
        closeButton: true
      }
    );
    // dropping this for now as the roads are in pieces
    // ugh
    // // highlight road on hover
    // layer.on("mouseover", function() {
    //   this.setStyle({
    //     opacity: 0.7 //or whatever style you wish to use;
    //   });
    // });
    // layer.on("mouseout", function() {
    //   this.setStyle({ opacity: 0 });
    // });
  };

  render() {
    return (
      <Map
        onViewportChanged={this.onViewportChanged()}
        viewport={this.props.viewport}
        doubleClickZoom={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
          id="mapbox.streets"
          accessToken={mapboxAccessToken}
        />

        <ScaleControl imperial={false} maxWidth={200} />
        <GeoJSON
          data={this.getStreets()}
          style={this.getStyle}
          onEachFeature={this.onEachFeature}
        />
        <div id="mapid" className="mapStyle" style={this.props.mapCursor} />
      </Map>
    );
  }
}

export default withFirebase(StreetsMap);
