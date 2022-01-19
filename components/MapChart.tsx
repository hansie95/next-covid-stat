import React from "react";
import { Box } from "@chakra-ui/layout";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useSelector } from "react-redux";
import {
  countryDataSelector,
  regionSelector,
  viewtSelector,
} from "../store/selectors/selector";
import { useColorMode } from "@chakra-ui/react";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

type marker = [
  {
    markerOffset: number;
    name: string;
    coordinates: [number, number];
  }
];

const MapChart = () => {
  const region = useSelector(regionSelector);
  const view = useSelector(viewtSelector);
  const coordinates = useSelector(countryDataSelector);
  const { colorMode } = useColorMode();

  const markers: marker = [
    {
      markerOffset: -30,
      name: coordinates[0]?.display_name,
      coordinates: [coordinates[0]?.lon, coordinates[0]?.lat],
    },
  ];

  if (coordinates[0]?.display_name === "Russia") {
    markers[0].coordinates[0] = 40;
    markers[0].coordinates[1] = 55;
  }

  if (coordinates.length === 0) {
    return <Box></Box>;
  }

  return (
    <ComposableMap projection="geoAzimuthalEqualArea" projectionConfig={view}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter((d) => d.properties.REGION_UN === region)
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={colorMode === "light" ? "#EAEAEC" : "#334257"}
                stroke={colorMode === "light" ? "#6998AB" : "#FE7E6D"}
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="#FF5533"
            stroke="#FF5533"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{
              fontFamily: "system-ui",
              fill: colorMode === "light" ? "#393E46" : "#fff",
              fontSize: "20px",
            }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
