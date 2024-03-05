import React from "react";
import "./Products.css";
import ProductItem from "./ProductItem";
import { productData } from "../data";

const Products = () => {
  return (
    <div className="product-wrapper">
      <h1>Products</h1>

      <div className="products">
        {productData.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
             
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
