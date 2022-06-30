import React from "react";

const Expense = () => {
  return (
    <div class="grid grid-cols-4 mt-3 gap-4">
      <div className="flex justify-between bg-[#3449eb] rounded-xl text-white h-20">
        <div>
            <div>01</div>
            <div>02</div>
        </div>
        <div>
            03
        </div>

      </div>
      <div className="bg-white rounded-xl h-20">02</div>
      <div className="bg-white rounded-xl h-20">03</div>
      <div className="bg-white rounded-xl h-20">04</div>
    </div>
  );
};

export default Expense;
