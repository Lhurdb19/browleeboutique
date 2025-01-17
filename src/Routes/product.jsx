import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { productList } from '../Productdata/productData';
import { useCartStore } from '../Cartstore/useCartStore'; 
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function Product() {
  const addItemToCart = useCartStore((state) => state.addItemToCart);
  // const [searchProduct, setSearchProduct] = useState('');
  
  const notify = () => toast.success("Product added successfully to cart!");
  

  const handleAddToCart = (product) => {
    addItemToCart(product);
    notify();
  };

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase()
  );

  return (
    <Fragment>

      <div className="product-mother">
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-info">
              <Link to={`/products/${product.id}`} className="product-image">
                <img src={product.images[0]} alt={product.name} />
              </Link>
              
              <div className="product-text">
              <h3>{product.name}</h3>
              <h4>
                {product.price
                  ? product.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'NGN',
                    })
                  : ''}
              </h4>
              <p >In stock: {product.inStock === 'Yes' ? 'Available' : 'Out of stock'}</p>
              <div className="btn">
                <button 
                  onClick={() => handleAddToCart(product)}
                  disabled={product.inStock === 'No'}
                >
                  Add to Cart
                </button>
              </div>
            </div>
              </div>
          ))}
        </div>
        <ToastContainer  position="top-right" className="toast"/>
      </div>
    </Fragment>
  );
};

export default Product;