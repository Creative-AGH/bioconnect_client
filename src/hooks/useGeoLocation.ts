import { useState, useEffect } from "react";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export function useGeoLocation() {
  const [location, setLocation] = useState<GeolocationCoordinates>();
  const [error, setError] = useState<GeolocationPositionError>();

  const onChange = ({ coords }: GeolocationPosition) => {
    setLocation(coords);
  };

  const onError = (error: GeolocationPositionError) => {
    setError(error);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(onChange);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              onChange,
              onError,
              options
            );
          } else if (result.state === "denied") {
            setError({
              code: 1,
              message: "Permission denied",
              PERMISSION_DENIED: 1,
              POSITION_UNAVAILABLE: 2,
              TIMEOUT: 3,
            });
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);

  return { lat: location?.latitude, lng: location?.longitude, error };
}
