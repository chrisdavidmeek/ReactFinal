import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const username = useSelector((state) => state.user.name);
  return (
    <div>
      <p>This is the home page</p>
      <p>{username}'s page</p>
    </div>
  );
};

export default Home;
