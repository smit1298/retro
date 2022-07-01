import React, { useState } from "react";
import Detail from "./Detail";

const Sidebar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="md:flex md:flex-row-reverse md:pl-0 block bg-white-500 pl-16">
      <div className="mb-20">
        <h1 className="uppercase text-blue-900 font-extrabold text-5xl h-5 mt-3 mb-8">
          retro
        </h1>
      </div>

      <div className="md:hidden block">
        <a href="/" className="text-[#7434eb]">
          <Detail dash="bg-gray-200" logo="typcn:chart-line" text="Dashboard" />
        </a>

        <a href="/" className="text-pdb">
          <Detail logo="mdi:warehouse" text="Products" />
        </a>
        <a href="/" className="text-pdb">
          <Detail logo="bx:cart" text="Blog" />
        </a>
        <a href="/" className="text-pdb">
          <Detail logo="clarity:wallet-line" text="Transaction" />
        </a>
        <a href="/" className="text-pdb">
          <Detail logo="mi:users" text="Users" />
        </a>
        <a href="/" className="text-pdb">
          <Detail logo="bi:bar-chart-line" text="Analysis" />
        </a>
        <a href="/" className="text-pdb">
          <Detail logo="charm:flag" text="Reports" />
        </a>
        <a href="/" className="text-pdb">
          <Detail logo="uil:suitcase-alt" text="Investment" />
        </a>
        <a href="/" className="text-pdb">
          <Detail logo="clarity:settings-line" text="Settings" />
        </a>
      </div>

      <div className="hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="48"
          height="48"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 48 48"
          onClick={() => {
            setHamburger(!hamburger);
          }}
        >
          <g
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          >
            <path d="M7.94971 11.9497H39.9497" />
            <path d="M7.94971 23.9497H39.9497" />
            <path d="M7.94971 35.9497H39.9497" />
          </g>
        </svg>
      </div>

      {hamburger && (
        <>
          <div className="md:block lg:hidden">
            <a href="/" className="text-[#7434eb]">
              <Detail
                dash="bg-gray-200"
                logo="typcn:chart-line"
                text="Dashboard"
              />
            </a>

            <a href="/" className="text-pdb">
              <Detail logo="mdi:warehouse" text="Products" />
            </a>
            <a href="/" className="text-pdb">
              <Detail logo="bx:cart" text="Blog" />
            </a>
            <a href="/" className="text-pdb">
              <Detail logo="clarity:wallet-line" text="Transaction" />
            </a>
            <a href="/" className="text-pdb">
              <Detail logo="mi:users" text="Users" />
            </a>
            <a href="/" className="text-pdb">
              <Detail logo="bi:bar-chart-line" text="Analysis" />
            </a>
            <a href="/" className="text-pdb">
              <Detail logo="charm:flag" text="Reports" />
            </a>
            <a href="/" className="text-pdb">
              <Detail logo="uil:suitcase-alt" text="Investment" />
            </a>
            <a href="/" className="text-pdb">
              <Detail logo="clarity:settings-line" text="Settings" />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
