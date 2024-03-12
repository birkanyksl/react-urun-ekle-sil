import React, { useState } from "react";
import "./Products.css";
import ProductItem from "./ProductItem";

import NewProduct from "../NewProducts/NewProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} products={products} />
      <h1>Products</h1>

      <div className="products">
        {products.length === 0 ? (
          <p>Hiç Ürün Yok</p>
        ) : (
          products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Products;
