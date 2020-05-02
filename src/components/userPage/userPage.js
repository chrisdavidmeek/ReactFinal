import React from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import Icon from "../mapIcon/mapIcon";

const UserPage = () => {
  //google maps position
  const [position, setPosition] = React.useState({});
  const [error, setError] = React.useState(null);
  const [garage, setGarage] = React.useState([]);
  const [name, setName] = React.useState("");

  //trigger coordinates
  const onChange = ({ coords }) => {
    setPosition({
      x: coords.latitude,
      y: coords.longitude,
    });
  };

  //errors
  const onError = (error) => {
    setError(error.message);
  };
  let userPosition = [position.x, position.y];

  //dynamic geo location
  React.useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Hey this isnt working");
      return;
    }
    test();
    let watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, [garage]);

  const user = useSelector((state) => state.realUser.name);
  const [bgColor, setBgColor] = React.useState("");

  //is user near by?
  const test = () => {
    if (userPosition[(0, 1)] === garage[(0, 1)]) {
      console.log("arrived at location");
      setBgColor("Blue");
    }
  };

  //parking lot/garage coordinate pairs
  const gateWay = { loc: [39.775302, -86.169055], name: "Gateway" };
  const lot83 = { loc: [39.773681, -86.169269], name: "Lot 83" };
  const lot71 = { loc: [39.775167, -86.167705], name: "Lot 71" };

  //array of lots
  const myArr = [gateWay, lot83, lot71];

  //set to individual parking lots
  const setToGateway = () => {
    setGarage(gateWay.loc);
    setBgColor("red");
    setName(gateWay.name);
    test();
  };

  const setToLot71 = () => {
    setGarage(lot71.loc);
    setBgColor("red");
    setName(lot71.name);
    test();
  };

  const setToLot83 = () => {
    setGarage(lot83.loc);
    setBgColor("red");
    setName(lot83.name);
    test();
  };

  //render
  return (
    <div>
      <p>Your page which will house the google maps API</p>
      <h2>Welcome {user} which garage will you be at today?</h2>

      <h3>
        You are currently at: {position.x}, {position.y}
      </h3>

      <div style={{ height: "600px", width: "auto" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAytZnb2W4AXtoqW5Xmi6a-uh8Jq7kvTGs" }}
          center={[39.774184, -86.169765]}
          defaultZoom={17}
          distanceToMouse={() => {}}
        >
          <Icon
            lat={garage[0]}
            lng={garage[1]}
            backgroundCol={bgColor}
            name={name}
          />
        </GoogleMapReact>
        <button onClick={() => setToGateway()}>To Gateway</button>
        <button onClick={() => setToLot83()}>To Lot 83 </button>
        <button onClick={() => setToLot71()}>To Lot 71</button>
        <button onClick={() => setBgColor("")}>Hide all</button>
      </div>
    </div>
  );
};

export default UserPage;
