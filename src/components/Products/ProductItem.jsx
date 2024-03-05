import React, { useState } from "react";
import "./ProductItem.css";
import Counter from "./Counter";

const ProductItem = ({ product }) => {
  const { imageUrl, productName } = product;
  const [title, setTitle] = useState(productName);

  const clickHandler = () => {
    setTitle("Güncellendi");
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-info">{title}</div>
      <div className="price">
        <span>
          <Counter product={product} />
        </span>
      </div>
      <button onClick={clickHandler}>Güncelle</button>
    </div>
  );
};

export default ProductItem;
