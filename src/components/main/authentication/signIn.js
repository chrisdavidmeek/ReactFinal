import React from "react";
import fire from "./firebase/fire";
import { Redirect } from "react-router-dom";

function SignIn() {
  const [value, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...value, [prop]: event.target.value });
  };

  const onSubmit = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(value.email, value.password)
      .then((cred) => {
        setValues({
          email: "",
          password: "",
        });
      })
      .catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
      });
  };

  return (
    <div>
      <input onChange={handleChange("email")} placeholder={"Email..."} />
      <input
        onChange={handleChange("password")}
        placeholder={"Password..."}
        type={"password"}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default SignIn;
