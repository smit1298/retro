import React from "react";

const Details = (props) => {
  return (
    <div className="mx-6 my-8">
      <h3>{props.day}</h3>
      <div className="flex  justify-between">
        <div className="">{props.amount}</div>
        <div>{props.chart}</div>
      </div>
    </div>
  );
};

export default Details;
