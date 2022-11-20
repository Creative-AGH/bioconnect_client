import { useEffect, useState } from "react";
import Map, {
  Marker,
  FullscreenControl,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import { Position } from "geojson";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import checkType from "./checktype";

const initialFeatureCollection = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [] as Position,
    },
  },
];

const MapComponent = () => {
  const [featureCollection, setFeatureCollection] = useState<any>(
    initialFeatureCollection
  );

  const { lat, lng, error: errGeoLoc } = useGeoLocation();

  useEffect(() => {
    setFeatureCollection((prev: any) => {
      return [
        ...prev,
        {
          type: "compost",
          geometry: {
            type: "Point",
            coordinates: [1 + 0.5, 2],
          },
        },
        {
          type: "green",
          geometry: {
            type: "Point",
            coordinates: [1, 2 + 0.5],
          },
        },
        {
          type: "powder",
          geometry: {
            type: "Point",
            coordinates: [1, 2],
          },
        },
        {
          type: "container",
          geometry: {
            type: "Point",
            coordinates: [1, 8],
          },
        },
      ];
    });
  }, []);

  useEffect(() => {
    if (lat && lng) {
      setFeatureCollection((prev: any) => {
        return [
          ...prev,
          {
            type: "position",
            geometry: {
              type: "Point",
              coordinates: [lng, lat],
            },
          },
        ];
      });
    }
  }, [lat, lng]);

  return (
    <Map
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: 5,
      }}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      style={{
        width: "100%",
        height: 700,
        boxShadow: "rgb(0 0 0 / 20%) 0px 0px 37px -6px",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <FullscreenControl />
      <NavigationControl />
      <GeolocateControl />
      {featureCollection.map((feature: any, index: any) => {
        const {
          coordinates: [markerLat, markerLng],
        } = feature.geometry;
        const { type } = feature;
        return (
          markerLat &&
          markerLng && (
            <Marker
              longitude={feature.geometry.coordinates[0]}
              latitude={feature.geometry.coordinates[1]}
              anchor="bottom"
              key={index}
            >
              <img src={checkType(type)} alt="title" />
            </Marker>
          )
        );
      })}
    </Map>
  );
};

export default MapComponent;

//sk.eyJ1Ijoiam9obnF3ZXJ0eSIsImEiOiJjbGFtYzN2NncwNHJhM29tcXIwNWx5MGxyIn0.MPD5ASfj-WsilhnPLrN3xA
