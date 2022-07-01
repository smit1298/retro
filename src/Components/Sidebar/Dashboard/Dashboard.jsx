import React from "react";
import { Icon } from "@iconify/react";
import Sales from "./Sales";
import Expense from "./Expense";
import Products from "../Dashboard/Products/Products"

const Dashboard = () => {
  return (
    <div className="bg-gray-200 px-4 pb-4 rounded-2xl col-span-3">
      <div className="flex mt-4 justify-between">
        <div className="relative">
          <input
            className="w-full bg-gray-300 pl-2 rounded h-9"
            type="text"
            placeholder="Search"
          />
          <Icon
            className="absolute top-3 right-0 mr-1"
            icon="ei:search"
            color="gray"
          />
        </div>

        <div className="flex">
          <div className="pr-2">
            <h2 className="font-bold text-dab">jamesbrown@example.com</h2>
            <p className="text-right text-pdb">Admin</p>
          </div>
          <img
            className="w-12 h-12 rounded-full"
            src="/image/temitope.jpg"
            alt="james Brown"
          />
        </div>
      </div>
      <Sales />
      <Expense />
      <Products />
    </div>
  );
};

export default Dashboard;
