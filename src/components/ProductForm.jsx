import React, { useState } from 'react';
import { useUpdateProductMutation } from '../api/productApi';

const ProductForm = () => {
  const [updateProduct] = useUpdateProductMutation();
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct({ id: productId, name: productName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={productId} 
        onChange={(e) => setProductId(e.target.value)} 
        placeholder="Product ID"
      />
      <input 
        type="text" 
        value={productName} 
        onChange={(e) => setProductName(e.target.value)} 
        placeholder="Product Name"
      />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default ProductForm;
