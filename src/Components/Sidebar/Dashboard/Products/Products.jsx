import React from "react";
import Categories from "../Categories";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <div className="flex">
      <div className="bg-red-900 w-1/3">
        <p>Top Selling Categories </p>
        <Categories />
      </div>
      <div className="bg-blue-300 w-2/3">
        <p>Latest Added Products</p>
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
