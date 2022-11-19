import { useEffect, useState } from "react";
import Map, {
  Source,
  Layer,
  LayerProps,
  FullscreenControl,
} from "react-map-gl";
import { useGetAllMarkersQuery } from "../../features/api/mapSlice";

const layerStyle = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 30,
    "circle-color": "#007cbf",
  },
} as LayerProps;

const MapComponent = ({ lat, lng }: { lat: number; lng: number }) => {
  const [featureCollection, setFeatureCollection] =
    useState<GeoJSON.FeatureCollection>({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [lng, lat] },
          properties: { title: "You are here" },
        },
      ],
    });

  const { data, error, isLoading } = useGetAllMarkersQuery(null);

  useEffect(() => {
    if (data) {
      setFeatureCollection((prev) => {
        return {
          type: "FeatureCollection",
          features: [
            ...prev.features,
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [data.longitude, data.latitude],
              },
              properties: { title: data.city },
            },
          ],
        };
      });
    }
  }, [data]);

  return (
    data && (
      <Map
        initialViewState={{
          longitude: data.longitude || lng,
          latitude: data.latitude || lat,
          zoom: 14,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        style={{ width: 1000, height: 700 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <FullscreenControl />
        <Source id="my-data" type="geojson" data={featureCollection}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    )
  );
};

export default MapComponent;

//sk.eyJ1Ijoiam9obnF3ZXJ0eSIsImEiOiJjbGFtYzN2NncwNHJhM29tcXIwNWx5MGxyIn0.MPD5ASfj-WsilhnPLrN3xA
