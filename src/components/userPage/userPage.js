import React from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import Icon from "../mapIcon/mapIcon";

const UserPage = () => {
  //google maps position
  const [position, setPosition] = React.useState({});
  const [error, setError] = React.useState(null);
  const [location, setLocation] = React.useState({ loc: [], name: "" });

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
  // let userPosition = [position.x, position.y];
  let userPosition = [39.775302, -86.169055];

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
  }, [location]);

  const user = useSelector((state) => state.realUser.name);
  const [bgColor, setBgColor] = React.useState("");

  //is user near by?

  const test = () => {
    if (userPosition[(0, 1)] === location.loc[(0, 1)])
      console.log("arrived at location");
    setBgColor("Blue");
  };

  //parking lot/garage coordinate pairs
  const gateWay = { loc: [39.775302, -86.169055], name: "Gateway" };
  const lot83 = { loc: [39.773681, -86.169269], name: "Lot 83" };
  const lot71 = { loc: [39.775167, -86.167705], name: "Lot 71" };

  //array of lots
  const myArr = [gateWay, lot83, lot71];

  //set to individual parking lots
  const setToGateway = () => {
    setBgColor("red");

    setLocation(gateWay);
    test(gateWay);
  };

  const setToLot71 = () => {
    setBgColor("red");
    setLocation(lot71);
    test(lot71);
  };

  const setToLot83 = () => {
    setBgColor("red");
    setLocation(lot83);
    test(lot83);
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
            lat={location.loc[0]}
            lng={location.loc[1]}
            backgroundCol={bgColor}
            name={location.name}
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
