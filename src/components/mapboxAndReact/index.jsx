import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

import '../../styles/MapBox.css';

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGJ1cmJhY2gxOTgyIiwiYSI6ImNrNjhhbXNwbzAzMWczcG56azQ2anhlcmsifQ.oIeM3Zzm_nFsu-dbACDbZg";



class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: '',
      lat: '',
      zoom: 10.00,
    };
  }

  componentDidMount() {
    const lng = -122.6750;
    const lat = 45.5051;
    new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: this.state.zoom
    });
  }

  componentDidUpdate(){
    const lng = this.props.lng;
    const lat = this.props.lat;
    new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.props.lng} | Latitude: {this.props.lat}
          </div>
        </div>
        <br />
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default MapBox;