import "./App.css";
import Map from "./components/map";
import { useGeoLocation } from "./hooks/useGeoLocation";

function App() {
  const { lat, lng, error } = useGeoLocation();

  return (
    <>
      <div className="App">{lat && lng && <Map lat={lat} lng={lng} />}</div>
      <div className="err">{(!lat || !lng) && !error && "Loading map..."}</div>
      <div className="err">{JSON.stringify(error)}</div>
    </>
  );
}

export default App;
