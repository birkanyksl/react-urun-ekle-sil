import React from "react";
import ProductForm from "./ProductForm";

const NewProduct = ({ setProducts }) => {
  const onSaveProduct = (newProductData) => {
    setProducts((prevState)=> [...prevState,newProductData]);
  };

  return (
    <div className="new-product-wrapper">
      <ProductForm onSaveProduct={onSaveProduct} />
    </div>
  );
};

export default NewProduct;
