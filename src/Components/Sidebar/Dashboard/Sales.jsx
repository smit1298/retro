import React from "react";
import { Link } from "react-router-dom";
import GraphTop from "./GraphTop";
import Graph from "./Graph";

const Sales = () => {
  return (
    <div className="bg-white-900">
      <div className="flex justify-between px-3 py-3  bg-white mt-4 rounded-t-lg">
        <div>
          <h1 className="font-bold text-[#9b9b9e]">Sales Overview</h1>
        </div>
        <div className="flex justify-center px-5 rounded text-white text-center bg-[#3449eb]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            className="my-2"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
            />
          </svg>
          <a className="mx-3 my-auto" href="/">
            Add Offer
          </a>
        </div>
      </div>
      <hr />

      <GraphTop />
      <Graph />
    </div>
  );
};

export default Sales;
