import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import data from "./data";

const ProductList = () => {
  const [productItem, setProductItem] = useState([]);

  useEffect(() => {
    setProductItem(data.data);
  });
  return (
    <div>
      {productItem.map((item, index) =>
        index < 5 ? <ProductItem key={item.id} card={item} /> : ""
      )}
    </div>
  );
};

export default ProductList;
