import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';  //Marker, Popup
import MarkerClusterGroup from "react-leaflet-cluster";
import { LatLngBounds } from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import powerOutage from '../assets/power_outage.png';

// Set up the default icon for markers
const DefaultIcon = L.icon({
  iconUrl: powerOutage,
  shadowUrl: iconShadow,
  iconAnchor: [16, 16],
  shadowSize: 32
});

L.Marker.prototype.options.icon = DefaultIcon;

export default class MyMap extends React.Component {
  position = [27.6648, -81.5158]; // Latitude and longitude for the initial map center
  bounds = new LatLngBounds([24.2, -88.0], [31.3, -78.8]);
  state = {
    hazards: []
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/hazards/all")
      .then(res => {
        const hazards = res.data;
        this.setState(({ hazards }));
      });
  }

  render() {
    return (
      <MapContainer center={this.position} maxBounds={this.bounds} boundsOptions={{padding: [50, 50]}} maxZoom={24} minZoom={7} zoom={7} style={{ height: "90vh", width: "100vw", margin: "1em auto" }}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
        />
        <MarkerClusterGroup>
          {this.state.hazards.map((hazard, index) => {

            let coordinates = L.latLng(hazard.latitude, hazard.longitude);
            return (
              <Marker
                key={hazard._id}
                position={coordinates}
              >
                <Popup>
                  {hazard.type}
                  <br />
                  {hazard.severity}
                  <br />
                  {hazard.imageUrl}
                </Popup>
              </Marker>
            )
          })}
        </MarkerClusterGroup>
    </MapContainer>
    )
  }
}


