import React from "react";

function Icon(props) {
  const name = props.name;
  const style = {
    backgroundColor: props.backgroundCol,
    height: "60px",
    width: "60px",
    borderRadius: "",
  };
  const nameStyle = {
    color: "white",
  };

  console.log(name);

  return (
    <div style={style}>
      <p style={nameStyle}>{name}</p>
    </div>
  );
}

export default Icon;
