import React from "react";
import ProductForm from "./ProductForm";

const NewProduct = ({ products,setProducts }) => {
  const onSaveProduct = (newProductData) => {
    setProducts((prevState)=> [...prevState,newProductData]);
  };

  return (
    <div className="new-product-wrapper">
      <ProductForm onSaveProduct={onSaveProduct} products={products}/>
    </div>
  );
};

export default NewProduct;
