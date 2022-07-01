import React from "react";
import Categories from "../Categories";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <div className="flex  justify between">
      <div className="bg-white mt-3 mr-3 rounded w-1/3">
        <p className="m-3 text-dab font-semibold">Top Selling Categories </p>
        <Categories />
      </div>
      <div className="bg-white mt-3 mr-3 rounded font-semibold w-2/3">
        <p className="m-3 text-dab font-semibold">Latest Added Products</p>
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
