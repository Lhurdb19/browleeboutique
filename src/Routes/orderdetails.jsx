import React, {Fragment, useEffect} from 'react';
import { useCartStore} from '../Cartstore/useCartStore'
// import "./Orderpayment.css"

function Orderdetails() {
    const { cartItems, totalCart } = useCartStore();


    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("totalCart", totalCart);
      }, [cartItems, totalCart]);

    return (
        <Fragment>
        <div className="cart-payment-wrapper">
          <div className="cart-list-payment">
            <div className="cart-card-payment">
              {cartItems.map((item) => (
                <div className="cart-check-payment" key={item.product_id}>
                  <div className="cart-payment-con">
                    <div className="cart-payment-span-1">
                      <img src={item.images[0]} alt={item.description} />
                    </div>
                    <div className="cart-payment-span-2">
                      <h3>{item.name}</h3>
                      <p>
                        {item.quantity && item.price
                          ? (item.quantity * item.price).toLocaleString(
                              "en-US",
                              {
                                style: "currency",
                                currency: "NGN",
                              }
                            )
                          : 0}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      
            <div className="cart-payment-sumarry">
              {/* <div className="order-payment-card"> */}
                <span>
                  <p>Subtotal</p>
                  <h3>
                    {totalCart
                      ? totalCart.toLocaleString("en-US", {
                          style: "currency",
                          currency: "NGN",
                        })
                      : ""}
                  </h3>
                </span>
              </div>
            </div>
          {/* </div> */}
        </div>
      </Fragment>
      
      );
}

export default Orderdetails;