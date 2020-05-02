import React from "react";

const ParkingLot = (props) => {
  const lots = ["Gateway", "Lot 71", "Lot 83"];

  {
    lots.map((items) => {
      return (
        <div>
          <p>{items}</p>
        </div>
      );
    });
  }
};

export default ParkingLot;
