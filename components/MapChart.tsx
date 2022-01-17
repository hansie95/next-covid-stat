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
                fill="#EAEAEC"
                stroke="#6998AB"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="3"
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
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
