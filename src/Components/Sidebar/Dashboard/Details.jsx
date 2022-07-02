import React from "react";
import { CardLineGraph } from "./CardLineGraph"
import { CardBarGraph } from "./CardBarGraph"


const Details = (props) => {
  return (
    <div className="mx-6 my-8">
      <div className="flex  justify-between" style={{width:'100%'}}>
        <div>
          <h3 className="text-dab text-xl" style={{fontSize:'12px'}}>{props.day}</h3>
          <div className="text-[20px] font-bold">{props.amount}</div>
        </div>
        <div  style={{width:'50%'}}>
          {props.type == 'bar' ? (<CardBarGraph data={props.data}/>) : ( <CardLineGraph data={props.data}/>) }
        </div>
      </div>
    </div>
  );
};

export default Details;
