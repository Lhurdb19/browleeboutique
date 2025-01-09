import React from 'react';
import { Link } from 'react-router-dom';
import { TbShoppingBag } from "react-icons/tb";

function Emptycart() {

  return (
    <div className='empty-container'>
        <h2>Shopping Bag</h2>
      <div className="empty-bag">
      <TbShoppingBag className='bag-icon' />
        <h4>Your bag is empty!</h4>
        <Link to={'/product'}>Start Shopping</Link>
      </div>
    </div>
  )
}

export default Emptycart;
