import React from "react";

import "./ProductItem.css";

const ProductItem = ({product}) => {
  const {imageUrl, productName, productPrice } = product;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-info">{productName}</div>
      <div className="price">
        <span>{productPrice}₺</span>
      </div>
      <button>Güncelle</button>
    </div>
  );
};

export default ProductItem;
