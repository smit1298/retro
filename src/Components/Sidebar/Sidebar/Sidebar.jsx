import React from "react";
import Detail from "./Detail";

const Sidebar = () => {
  return (
    <div className="block bg-white-500 pl-16">
      <div className="mb-20">
        <h1 className="uppercase text-blue-900 font-extrabold text-5xl h-5 mt-3 mb-8">
          retro
        </h1>
      </div>

      <div className="text-[#7434eb]">
        <Detail dash="bg-gray-200" logo="typcn:chart-line" text="Dashboard" />
      </div>

      <div className="text-pdb">
        <Detail logo="mdi:warehouse" text="Products" />
      </div>
      <div className="text-pdb">
        <Detail logo="bx:cart" text="Blog" />
      </div>
      <div className="text-pdb">
        <Detail logo="clarity:wallet-line" text="Transaction" />
      </div>
      <div className="text-pdb">
        <Detail logo="mi:users" text="Users" />
      </div>
      <div className="text-pdb">
        <Detail logo="bi:bar-chart-line" text="Analysis" />
      </div>
      <div className="text-pdb">
        <Detail logo="charm:flag" text="Reports" />
      </div>
      <div className="text-pdb">
        <Detail logo="uil:suitcase-alt" text="Investment" />
      </div>
      <div className="text-pdb">
        <Detail logo="clarity:settings-line" text="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;
