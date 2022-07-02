import React from "react";
import Details from "./Details";
import { ExpenseData } from './expensedata'

const Expense = () => {
  return (
    <div class="grid grid-cols-4 mt-3 gap-4">
      {ExpenseData.map((item,index) => {
        if(index == 0){
          return (          
            <div className="bg-[#3449eb] rounded-xl text-white">
              <Details data={item} day={item.description} type={item.type} amount={`$ ${item.amount}`} chart="chart" />
            </div>
          )
        }
        return (          
          <div className="bg-white rounded-xl">
            <Details data={item} day={item.description} type={item.type} amount={`$ ${item.amount}`} chart="chart" />
          </div>
        )
      })}
      {/* <div className=" bg-[#3449eb] rounded-xl text-white">
        <Details day="Daily Income" amount="&#36; 345" chart="chart" />
      </div> */}
    </div>
  );
};

export default Expense;
