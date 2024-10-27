import React from 'react';
import { LayerGroup, LayersControl, MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';  //Marker, Popup
import MarkerClusterGroup from "react-leaflet-cluster";
import { LatLngBounds } from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FireIcon, PowerIcon, BlockIcon, FloodIcon } from '../utils/icons';
import Sidebar from "./Sidebar";
// Set up the default icon for markers
const { Overlay } = LayersControl;

const createClusterCustomIcon = function (cluster) {
  
  const markers = cluster.getAllChildMarkers();
  const type = markers[0].options.children.props.children[0];
  
  if (type === "Power Outage") {
    return PowerIcon;
  } else if (type === "Flooding") {
    return FloodIcon;
  } else if (type === "Fire") {
    return FireIcon;
  } else if (type === "Blocked Road") {
    return BlockIcon;
  }
};

export default class MyMap extends React.Component {
  position = [27.6648, -81.5158]; // Latitude and longitude for the initial map center
  bounds = new LatLngBounds([24.2, -88.0], [31.3, -78.8]);
  state = {
    hazards: [],
    hazardGroups: {
      "Power Outage": [],
      "Flooding": [],
      "Fire": [],
      "Blocked Road": []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/hazards/all")
      .then(res => {
        const hazards = res.data;
        this.setState(({ hazards }), () => this.setupMapMarkers());
      }).catch(error => {
        console.log(error.response);
      });
  }

  refreshPoints() {
    axios.get("http://localhost:8080/api/hazards/all")
      .then(res => {
        const hazards = res.data;
        this.setState(({ hazards }), () => this.setupMapMarkers());
      }).catch(error => {
        console.log(error.response);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.triggerRefresh !== this.props.triggerRefresh) {
      this.refreshPoints();
    }
  }

  setupMapMarkers() {

    const newHazardGroups = {
      "Power Outage": [],
      "Flooding": [],
      "Fire": [],
      "Blocked Road": []
    }

    this.state.hazards.forEach((hazard) => {
      let coordinates = L.latLng(hazard.latitude, hazard.longitude);

      let icon = '';

      if (hazard.type === "Power Outage") {
        icon = PowerIcon;
      } else if (hazard.type === "Flooding") {
        icon = FloodIcon;
      } else if (hazard.type === "Fire") {
        icon = FireIcon;
      } else if (hazard.type === "Blocked Road") {
        icon = BlockIcon;
      }

      newHazardGroups[hazard.type].push(
        <Marker
          key={hazard._id}
          position={coordinates}
          icon={icon}
        >
          <Popup>
            {hazard.type}
            <br />
            {hazard.severity}
            <br />
            {hazard.description}
          </Popup>
        </Marker>
      )
    })

    this.setState({ hazardGroups: newHazardGroups });
  }

  render() {
    
    return (
      <div>
        <Sidebar></Sidebar>
        <MapContainer center={this.position} maxBounds={this.bounds} boundsOptions={{padding: [50, 50]}} maxZoom={24} minZoom={7} zoom={7} style={{ height: "100vh", width: "100vw" }} zoomControl={false}>
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
          />
          <ZoomControl position="bottomright" />
          <LayersControl>
            {Object.keys(this.state.hazardGroups).map((type, index) => (
                <Overlay key={type} checked name={type}>
                  <LayerGroup>
                    <MarkerClusterGroup maxClusterRadius={40} iconCreateFunction={createClusterCustomIcon}>
                      {this.state.hazardGroups[type].map((marker) => marker)}
                    </MarkerClusterGroup>
                  </LayerGroup>
                </Overlay>
            ))}
          </LayersControl>
        </MapContainer>
      </div>
    )
  }
}


