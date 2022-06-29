import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Detail = (props) => {
  return (
    <div className="my-1">
      <a
        className={`flex space-x-2 w-48 rounded ${props.dash}`}
        to="/"
      >
        <Icon className="ml-3 my-1" icon={props.logo} color={props.col} />
        <p className="my-auto pl-3 text-lg font-semibold">{props.text}</p>
      </a>
    </div>
  );
};

export default Detail;
