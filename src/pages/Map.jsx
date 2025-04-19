// src/pages/Map/Map.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon (required for Leaflet + React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Define Zones of Nagpur with coordinates and carbon footprint data
const zones = [
  { name: "Sitabuldi", lat: 21.148, lng: 79.082, carbon: 480 },
  { name: "Dharampeth", lat: 21.1388, lng: 79.0622, carbon: 310 },
  { name: "Mahal", lat: 21.1465, lng: 79.1012, carbon: 220 },
  { name: "Pratap Nagar", lat: 21.1211, lng: 79.0845, carbon: 530 },
  { name: "Trimurti Nagar", lat: 21.1085, lng: 79.0489, carbon: 290 },
  { name: "Civil Lines", lat: 21.1509, lng: 79.0718, carbon: 410 },
  { name: "Manish Nagar", lat: 21.0945, lng: 79.0473, carbon: 470 },
  { name: "Jaripatka", lat: 21.1895, lng: 79.1052, carbon: 330 },
  { name: "Wardhaman Nagar", lat: 21.1423, lng: 79.1169, carbon: 390 },
  { name: "Nandanvan", lat: 21.1386, lng: 79.1086, carbon: 310 },
  { name: "Bharat Nagar", lat: 21.1249, lng: 79.0642, carbon: 350 },
  { name: "Koradi", lat: 21.2325, lng: 79.0823, carbon: 270 },
  { name: "Hudkeshwar", lat: 21.1003, lng: 79.1273, carbon: 460 },
];

// Function to return carbon footprint tip based on emissions
const getTip = (carbon) => {
  if (carbon > 500) return "🔥 Very High emissions. Promote green roofs & shaded streets.";
  if (carbon > 400) return "🌳 Add tree cover and cool roofing systems.";
  if (carbon > 300) return "🚲 Encourage cycling lanes and public transport.";
  return "✅ Low emissions. Preserve green areas and water bodies.";
};

const Map = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* Initialize the map container */}
      <MapContainer
        center={[21.1458, 79.0882]} // Centering map on Nagpur
        zoom={12} // Zoom level
        style={{ height: "100%", width: "100%" }}
      >
        {/* Adding OpenStreetMap TileLayer */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Loop through zones and add markers */}
        {zones.map((zone, idx) => (
          <Marker key={idx} position={[zone.lat, zone.lng]}>
            <Popup>
              <strong>{zone.name}</strong>
              <br />
              Carbon Footprint: {zone.carbon} kg CO₂e/month
              <br />
              Tip: {getTip(zone.carbon)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;