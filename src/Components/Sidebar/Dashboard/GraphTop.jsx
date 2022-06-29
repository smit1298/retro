import React from "react";
import Graph from "./Graph";

const GraphTop = () => {
  return (
    <div>
      <div className="bg-white flex py-3 justify-between">
        <div className="flex mx-3">
          <p className="font-bold">&#36;80,630</p>
          <p className="flex ml-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 20V4m-7 7l7-7l7 7"
                />
              </svg>
            </span>
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
            6.7%
          </p>
        </div>
        <div className="flex">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="10"
              height="10"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              className="mt-2"
            >
              <circle cx="12" cy="12" r="11" fill="#5769f2" />
            </svg>
            <p>Income</p>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="10"
              height="10"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              className="mt-2"
            >
              <circle cx="12" cy="12" r="11" fill="#f5278e" />
            </svg>
            <p>Expenses</p>
          </div>
          <div className="mr-3">
            <input className="border" type="year" />
          </div>
        </div>
      </div>
      <Graph />
    </div>
  );
};

export default GraphTop;
