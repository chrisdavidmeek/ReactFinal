import React from "react";
import "./App.css";
import SignIn from "./components/main/authentication/signIn";
import SignUp from "./components/main/authentication/signUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import fire from "./components/main/authentication/firebase/fire";
import userPage from "./components/userPage/userPage";
import Home from "./components/Home/home";
import {
  currentUser,
  checkSignIn,
} from "./components/redux/actions/setActions";

function App() {
  const db = fire.firestore();
  const dispatch = useDispatch();
  const change = useSelector((state) => state.change);
  const signedIn = useSelector((state) => state.signedIn);

  React.useEffect(() => {
    fire.auth().onAuthStateChanged(function (user) {
      console.log(user);

      if (user) {
        dispatch(currentUser(user));
        dispatch(checkSignIn(true));
      } else {
        dispatch(checkSignIn(false));
        dispatch(currentUser({ name: "" }));
      }
    });
  }, [dispatch, change]);
  // sign out function

  const signOut = () => {
    fire
      .auth()
      .signOut()
      .then(function () {
        console.log("User signed out");
      })
      .catch(function (error) {});
  };

  //implement google maps

  return (
    <div className="App">
      <Router>
        <div className="App">
          <nav>
            {!signedIn ? (
              <span>
                {" "}
                <Link style={{ margin: "10px" }} to={"/"}>
                  Home
                </Link>
                <Link style={{ margin: "10px" }} to={"/signIn"}>
                  Sign In
                </Link>
                <Link style={{ margin: "10px" }} to={"/signup"}>
                  Sign Up
                </Link>
              </span>
            ) : (
              <div>
                <Link style={{ margin: "10px" }} to={"/"}>
                  Home
                </Link>
                <Link style={{ margin: "10px" }} to={"/userPage"}>
                  Your Page
                </Link>
                <Link onClick={signOut} to={"/"}>
                  Sign Out
                </Link>
              </div>
            )}
          </nav>
          <Switch>
            <Route path={"/signup"} component={SignUp} />
            <Route path={"/signin"} component={SignIn} />
            <Route path={"/userPage"} component={userPage} />
            <Route path={"/"} component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
