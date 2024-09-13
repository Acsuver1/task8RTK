import React from 'react';
import { useGetProductsQuery } from '../api/productApi';
import './Home.css';

const Home = () => {
  // API'dan ma'lumot olish
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <div className="home">
      <h1 className="home-title">Welcome to Our Store</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <h2 className="product-name">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <img src={product.images} alt={product.name} className="product-image" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
