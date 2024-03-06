import React, { useState } from "react";
import "./Products.css";
import ProductItem from "./ProductItem";
import { productData } from "../../data";
import NewProduct from "../NewProducts/NewProduct";

const Products = () => {
  const [products, setProducts] = useState(productData);

  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} products={products} />
      <h1>Products</h1>

      <div className="products">
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
