import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCw_1hb3WVGtDLz8pm14GpTiZrdfhmbFHs",
  authDomain: "react-final-project-f952d.firebaseapp.com",
  databaseURL: "https://react-final-project-f952d.firebaseio.com",
  projectId: "react-final-project-f952d",
  storageBucket: "react-final-project-f952d.appspot.com",
  messagingSenderId: "900601129440",
  appId: "1:900601129440:web:b96d880f3c096ff03c6385",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
