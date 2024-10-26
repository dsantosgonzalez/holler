import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';  //Marker, Popup
import { LatLngBounds } from 'leaflet';

function MyMap() {
  const position = [27.6648, -81.5158]; // Latitude and longitude for the initial map center
  const bounds =  new LatLngBounds([24.2, -88.0], [31.3, -78.8])


  return (
    <MapContainer center={position} maxBounds={bounds} boundsOptions={{padding: [50, 50]}} maxZoom={24} minZoom={7} zoom={7} style={{ height: "90vh", width: "100vw", margin: "1em auto" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default MyMap;
