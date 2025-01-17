import React, { useEffect, useState } from 'react';
import { useCartStore } from '../Cartstore/useCartStore';
import { trendList } from '../Productdata/trendData';
import { TiStar } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Trendproduct() {
    const addItemToCart = useCartStore((state) => state.addItemToCart);
    const [visible, setVisible] = useState(5);

    const notify = () => toast.success("Product added successfully to cart!");
      

    const handleAddToCart = (trend) => {
        addItemToCart(trend);
        notify();
    };

    const handleViewMore = () => {
        setVisible(prevValue => prevValue + 5)
    }

    const filteredProducts = trendList.filter((trend) => 
    trend.name.toLowerCase()
);

  return (
    <div className='trend-container'>
        <h3 data-aos="fade-down">HOT TRENDING</h3>
        <div className="trend-list">
            {filteredProducts.slice(0, visible).map((trend) => (
                <div key={trend.id} className="trend-info">
                    <div className='trend-image'>
                    <img src={trend.images} alt={trend.name} /></div>

                    <div className="trend-text">
                        <h3>{trend.name}</h3>
                        <p className='stars-icon'><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></p>
                        <h4>
                            {trend.price ? trend.price.toLocaleString("en-US", {
                                style: 'currency',
                                currency: 'NGN',
                            })
                             : ''}
                        </h4>
                        <p >In Stock: {trend.inStock === 'Yes' ? 'Available' : 'Out of stock'}</p>
                        <div className="btn">
                            <button onClick={()=> handleAddToCart(trend)}
                                disabled={trend.inStock === 'No' }>Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
                </div>     
            {visible ? (

                <button onClick={handleViewMore}>View More</button>
            ) : (
                <button onClick={setVisible(false)} disabled={visible ? 30 : ''} ></button>
            )
            }
    
    <ToastContainer  position="top-right" className="toast"/>
    </div>
  )
}

export default Trendproduct
