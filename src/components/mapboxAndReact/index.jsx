import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
// import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

import '../../styles/MapBox.css';

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGJ1cmJhY2gxOTgyIiwiYSI6ImNrNjhhbXNwbzAzMWczcG56azQ2anhlcmsifQ.oIeM3Zzm_nFsu-dbACDbZg";

class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -122.675,
      lat: 45.5051,
      zoom: 9.00
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    // ACTIVATING THIS WILL CAUSE LIBRARY-SIDE AUTOCOMPLETE TO BE ACTIVE. DO NOT ACTIVATE UNLESS YOU WISH YOU BYPASS CREATOR'S ORIGINAL CODE PLAN (AKA A secondary search bar will render that uses MapBoxGeocoder to search/provide search results on typing)==========================

//     map.addControl(
//       new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl
//       })
//     );
  }

  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <br />
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default MapBox;