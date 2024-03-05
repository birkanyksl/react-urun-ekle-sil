import React from "react";
import "./ProductForm.css";

const ProductForm = () => {
  return (
    <form className="product-form">
      <div className="product-form-input">
        <label >Ürün Adı</label>
        <input type="text" placeholder="Ürün adı giriniz."/>
      </div>

      <div className="product-form-input">
        <label >Ürün Fiyatı</label>
        <input type="number" placeholder="Ürün fiyatı giriniz."/>
      </div>

      <div className="product-form-input">
        <label >Ürün Görseli</label>
        <input type="text" placeholder="Ürün görseli giriniz."/>
      </div>
      <button className="product-form-button">Ürün Ekle</button>
    </form>
  );
};

export default ProductForm;
