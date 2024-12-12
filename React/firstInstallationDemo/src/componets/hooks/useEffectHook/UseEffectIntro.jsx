import React, { useState, useEffect } from 'react';

const UseEffectIntro = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch data when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json); // Store the fetched data in state
        setLoading(false); // Stop the loading spinner
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false); // Stop loading even on error
      });
  }, []); // Empty dependency array ensures this runs once on mount

  // Display loading spinner if data is not ready
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectIntro;
