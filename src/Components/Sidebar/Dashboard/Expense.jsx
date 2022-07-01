import React from "react";
import Details from "./Details";

const Expense = () => {
  return (
    <div class="grid grid-cols-4 mt-3 gap-4">
      <div className="flex justify-between bg-[#3449eb] rounded-xl text-white">
        <Details day="Daily Income" amount="&#36; 345" chart="chart" />
      </div>
      <div className="bg-white rounded-xl">
      <Details day="Daily Expenses" amount="&#36; 380" chart="chart" />
      </div>
      <div className="bg-white rounded-xl">
      <Details day="Weekly Income" amount="&#36; 5380" chart="chart" />
      </div>
      <div className="bg-white rounded-xl">
      <Details day="Weekly Expenses" amount="&#36; 4320" chart="chart" />
      </div>
    </div>
  );
};

export default Expense;
