import React, { Component } from "react";
import { Map, TileLayer, ScaleControl, GeoJSON, Popup } from "react-leaflet";
import { mapboxAccessToken } from "../mapboxAccessToken.json";
import { streets } from "./vic.json";

class StreetsMap extends Component {
  constructor() {
    super();
  }
  getStyle(feature, layer) {
    return {
      color: "#006400",
      weight: 7,
      opacity: 0.65
    };
  }

  onViewportChanged = viewport => {
    console.log("Zoom level: " + this.props.viewport.zoom);
  };

  onEachFeature = (feature, layer) => {
    layer.bindPopup(
      "<div>" +
        "<h3>" +
        feature.properties.name +
        "</h3>" +
        feature.properties.origin +
        "</div>",
      {
        closeButton: false
      }
    );
    layer.on("mouseover", function() {
      layer.openPopup();
    });
    layer.on("mouseout", function() {
      layer.closePopup();
    });
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
          data={getStreets()}
          style={this.getStyle}
          onEachFeature={this.onEachFeature}
        />
        <div id="mapid" className="mapStyle" style={this.props.mapCursor} />
      </Map>
    );
  }
}

function getStreets() {
  return streets;
}
export default StreetsMap;
