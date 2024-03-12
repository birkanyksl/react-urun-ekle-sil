import React, { useState } from "react";
import "./ProductItem.css";
import Counter from "./Counter";

const ProductItem = ({ product, products, setProducts }) => {
  const { imageUrl, productName } = product;
  const [title, setTitle] = useState(productName);

  const clickHandler = () => {
    setTitle("Güncellendi");
  };

  const deleteHandler = () => {
    setProducts(products.filter((item) => item.id !== product.id));
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
      <button onClick={deleteHandler} className="btn-delete">
        Sil
      </button>
    </div>
  );
};

export default ProductItem;
