import React from 'react';
import { Link } from 'react-router-dom';
import { womenProductList } from '../Productdata/womenProduct';
import { useCartStore } from '../Cartstore/useCartStore';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Womenfashion() {
  const addItemToCart = useCartStore((state) => state.addItemToCart);

  const notify = () => toast.success("Product added successfully to cart!");
    

  const handleAddToCart = (women) => {
    addItemToCart(women);
    notify();
  };

  const filteredProducts = womenProductList.filter((women) =>
    women.name.toLowerCase()
  );

  return (
    <>
    <div className='women-mother-container'>
      <div className="women-list">
        {filteredProducts.map((women) => (
          <div key={women.id} className="women-info">
            <Link to={`/womenfashion/${women.id}`} className='women-image'>
            <img src={women.images[0]} alt={women.name} />
            </Link>

            <div className="women-text">
              <h3>{women.name}</h3>
              <h4>
                {women.price
                ? women.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'NGN',
                })
              : ''}
              </h4>
              <p>In Stock: {women.inStock === 'Yes' ? 'Available' : 'Out of stock'}</p>
              <div className="btn">
                <button onClick={()=> handleAddToCart(women)}
                  disabled={women.inStock === 'No'}>
                    Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer  position="top-right" className="toast"/>
    </div>
    </>
  )
}

export default Womenfashion;
