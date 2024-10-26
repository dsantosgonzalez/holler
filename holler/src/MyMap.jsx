import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';  //Marker, Popup

function MyMap() {
  const position = [29.6520, -82.3250]; // Latitude and longitude for the initial map center

  return (
    <MapContainer center={position} zoom={8} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default MyMap;
