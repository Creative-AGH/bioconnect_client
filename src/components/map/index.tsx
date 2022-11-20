import { useEffect, useState } from "react";
import Map, {
  Marker,
  FullscreenControl,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import { Position } from "geojson";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import { useGetAllMarkersQuery } from "../../features/api/mapSlice";
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
  const { data, error: errMarkers } = useGetAllMarkersQuery(null);

  useEffect(() => {
    if (data) {
      setFeatureCollection((prev: any) => {
        return [...prev, ...data];
      });
    }
  }, [data]);

  // useEffect(() => {
  //   if (lat && lng) {
  //     setFeatureCollection((prev: any) => {
  //       return [
  //         ...prev,
  //         {
  //           type: "position",
  //           geometry: {
  //             type: "Point",
  //             coordinates: [lng, lat],
  //           },
  //         },
  //       ];
  //     });
  //   }
  // }, [lat, lng]);

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
      {data &&
        featureCollection.map(
          (
            {
              id,
              description,
              categoryOfWaste,
              howMuchBioWaste,
              accountId,
              dateOfCreate,
              x,
              y,
            }: any,
            index: any
          ) => {
            return (
              x &&
              y && (
                <Marker longitude={x} latitude={y} anchor="bottom" key={index}>
                  <img src={checkType(categoryOfWaste)} alt="title" />
                </Marker>
              )
            );
          }
        )}
    </Map>
  );
};

export default MapComponent;

//sk.eyJ1Ijoiam9obnF3ZXJ0eSIsImEiOiJjbGFtYzN2NncwNHJhM29tcXIwNWx5MGxyIn0.MPD5ASfj-WsilhnPLrN3xA
