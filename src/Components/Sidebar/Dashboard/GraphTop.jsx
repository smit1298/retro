import React from "react";
import Graph from "./Graph";

const GraphTop = () => {
  return (
    <div>
      <div className="bg-white flex py-3 justify-between">
        <div className="flex mx-3">
          <p className="font-bold text-4xl">&#36;80,630</p>
          <p className="flex ml-3 text-green-700 mt-1 font-bold">
            <span className="rounded-full h-8 my-auto bg-green-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                className="mx-2 my-2"
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
            <span className="flex mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                className="my-1 ml-2"
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
            </span>
          </p>
        </div>
        <div className="flex">
          <div className="flex mx-4">
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
          <div className="flex mx-4">
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
          <div className="mx-4 relative">
            <input
              className="border rounded px-3 w-40"
              placeholder="year"
              type="year"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
              className="absolute top-2 right-3"
            >
              <path
                fill="currentColor"
                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2L227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphTop;
