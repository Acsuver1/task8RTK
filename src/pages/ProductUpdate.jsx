import React from 'react';
import './ProductUpdate.css';

const ProductUpdate = () => {
  return (
    <div className="product-update">
      <form className="update-form">
        <h2 className="update-title">Update Product</h2>
        <input type="text" placeholder="Product Name" className="update-input" />
        <input type="number" placeholder="Price" className="update-input" />
        <textarea placeholder="Description" className="update-textarea"></textarea>
        <button type="submit" className="update-button">Update</button>
      </form>
    </div>
  );
};

export default ProductUpdate;
