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

const initialFeatureCollection: any = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [] as Position,
    },
    properties: {
      image: "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
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
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [data.longitude, data.latitude],
            },
            properties: {
              image:
                "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
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
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [lng, lat],
            },
            properties: {
              image:
                "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
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
          const { title, image } = feature.properties;
          return (
            markerLat &&
            markerLng && (
              <Marker
                longitude={feature.geometry.coordinates[0]}
                latitude={feature.geometry.coordinates[1]}
                anchor="bottom"
                key={index}
                style={{ display: "grid", placeItems: "center" }}
              >
                <img src={image} alt="title" />
                <span
                  style={{
                    maxWidth: "90px",
                    textAlign: "center",
                  }}
                ></span>
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
