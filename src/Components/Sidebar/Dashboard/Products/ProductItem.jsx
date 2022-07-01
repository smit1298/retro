import React from "react";

const ProductItem = ({card}) => {
  return (
    <div className="flex mx-6">
      <div className="ml-3" >
        <img className="w-8 h-8 rounded" src={card.img} alt={card.title} />
      </div>

      <div className="block w-[200px] ml-3">
        <h3>{card.title}</h3>
        <p className="text-dab">{card.variants}</p>
      </div>

      <div className="w-[100px] flex ml-2">
        <p className="text-dab">{card.sku} &nbsp;</p>
        <h3>{card.skuN}</h3>
      </div>

      <div className="mx-4 w-[50px]">
        <p>{card.type}</p>
      </div>

      <div className="mx-4">
        <p>{card.date}</p>
      </div>

      <div className="mx-4">
        <p>{card.status}</p>
      </div>
    </div>
  );
};

export default ProductItem;
