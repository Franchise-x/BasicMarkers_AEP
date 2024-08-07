import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

// URL for US states topojson data
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Markers for Boise, Livermore, and Phoenix
const markers = [
  {
    markerOffset: -15,
    name: "Boise",
    coordinates: [-116.2023, 43.615], // Boise, Idaho
    link: "https://individual-studies-179585.framer.app/idaho" // Link for Boise
  },
  {
    markerOffset: 25,
    name: "Livermore",
    coordinates: [-121.768, 37.6819], // Livermore, California
    link: "https://individual-studies-179585.framer.app/california" // Link for Boise
  },
  {
    markerOffset: 25,
    name: "Phoenix",
    coordinates: [-112.074, 33.4484], // Phoenix, Arizona
    link: "https://individual-studies-179585.framer.app/arizona" // Link for Boise
  }
];

const MapChart = () => {
  return (
    <div className="App">
      <h1>Project Locations</h1>
      <div className="map-container">
        <ComposableMap
          projection="geoAlbersUsa" // Using US-specific projection
          projectionConfig={{
            scale: 1000 // Scale adjusted for better fit
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#0D4D72"
                  stroke="#D6D6DA"
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              {/* Custom SVG Marker */}
              <g
                fill="none"
                stroke="#F9D717"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              </g>
              <text className="marker-text">{name}</text>{" "}
              {/* Updated to use CSS class */}
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default MapChart;
