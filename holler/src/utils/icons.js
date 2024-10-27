import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import powerOutage from '../assets/power_outage.png';
import fire from '../assets/fire.png';
import block from '../assets/block.png';
import flood from '../assets/flood.png';
import camera from '../assets/camera.png';

const PowerIcon = L.icon({
    iconUrl: powerOutage,
    shadowUrl: iconShadow,
    iconAnchor: [16, 16],
    shadowSize: 32
  });
  
  const BlockIcon = L.icon({
    iconUrl: block,
    shadowUrl: iconShadow,
    iconAnchor: [16, 16],
    shadowSize: 32
  });
  
  const FloodIcon = L.icon({
    iconUrl: flood,
    shadowUrl: iconShadow,
    iconAnchor: [16, 16],
    shadowSize: 32
  });
  
  const FireIcon = L.icon({
    iconUrl: fire,
    shadowUrl: iconShadow,
    iconAnchor: [16, 16],
    shadowSize: 32
  });
  const cameraIcon = L.icon({
    iconUrl: camera,
    shadowUrl: iconShadow,
    iconAnchor: [16, 16],
    shadowSize: 32
  });
export { PowerIcon, BlockIcon, FloodIcon, FireIcon, cameraIcon } ;