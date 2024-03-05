import React from "react";

import "./ProductItem.css";
import Counter from "./Counter";

const ProductItem = ({ product }) => {
  const { imageUrl, productName} = product;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-info">{productName}</div>
      <div className="price">
        <span>
          <Counter product={product}/>
        </span>
      </div>
      <button>Güncelle</button>
    </div>
  );
};

export default ProductItem;
