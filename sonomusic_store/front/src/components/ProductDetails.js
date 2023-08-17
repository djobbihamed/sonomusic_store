import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = (props) => {
  const { productId } = useParams();
  const history = useNavigate();

  const product = props.products.find((p) => p._id === productId);

  const handleAddToCart = () => {
    
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.imageUrl} alt="MacBook Pro" />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>Price: {product.price}</h2>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={() => history.goBack()}>Back to Products List</button>
      </div>
    </div>
  );
}

export default ProductDetails;
