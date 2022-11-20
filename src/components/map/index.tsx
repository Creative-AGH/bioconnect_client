import { useEffect, useState } from "react";
import Map, {
  Marker,
  FullscreenControl,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import { Position } from "geojson";
import { useGetAllMarkersQuery } from "../../features/api/mapSlice";
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
  const { data, error, isLoading } = useGetAllMarkersQuery(null);

  useEffect(() => {
    if (data) {
      setFeatureCollection((prev: any) => {
        return [
          ...prev,
          {
            type: "compost",
            geometry: {
              type: "Point",
              coordinates: [data.longitude + 0.5, data.latitude],
            },
          },
          {
            type: "green",
            geometry: {
              type: "Point",
              coordinates: [data.longitude, data.latitude + 0.5],
            },
          },
          {
            type: "powder",
            geometry: {
              type: "Point",
              coordinates: [data.longitude, data.latitude],
            },
          },
        ];
      });
    }
  }, [data]);

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
    data && (
      <Map
        initialViewState={{
          longitude: data.longitude || lng,
          latitude: data.latitude || lat,
          zoom: 5,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        style={{ width: 1000, height: 700 }}
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
    )
  );
};

export default MapComponent;

//sk.eyJ1Ijoiam9obnF3ZXJ0eSIsImEiOiJjbGFtYzN2NncwNHJhM29tcXIwNWx5MGxyIn0.MPD5ASfj-WsilhnPLrN3xA
