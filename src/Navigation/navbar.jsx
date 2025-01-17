import React, { useState, Fragment } from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { SlHome } from "react-icons/sl";
import { SlUserUnfollow } from "react-icons/sl";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { CiShop } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { SlSettings } from "react-icons/sl";
import { LuView } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { FiUserX } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { useCartStore } from "../Cartstore/useCartStore";
import { productList } from "../Productdata/productData";
import { womenProductList } from "../Productdata/womenProduct";
import "./Navbar.css";

function Navbar({ user, handleLogout }) {
  const [isMobile, setIsMobile] = useState(false);
  const { cartCount } = useCartStore();
  const [userDrop, setUserDrop] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const navigate = useNavigate();

  const handleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleUserDrop = () => {
    setUserDrop(!userDrop);
  };

  const handleProductClick = () => {
    setSearchProduct("");
  };

  

  const NavLink = ({ isActive }) => ({
    color: isActive ? "#007bff" : "",
  });

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const filteredWomen = womenProductList.filter((women) =>
    women.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <Fragment>
      {searchProduct && (
        <div className="search-product-result-overlay">
          <div className="result-card">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`} onClick={handleProductClick}>
                  <h4>{product.name}</h4>
                </Link>
              ))
            ) : (
              <p>No product found with the specified name.</p>
            )}
            {filteredWomen.length > 0 ? (
              filteredWomen.map((women) => (
                <Link key={women.id} to={`/womenproduct/${women.id}`} onClick={handleProductClick}>
                <h4>{women.name}</h4>
              </Link>
              ))
            ) : (
              <p>No product found with the specified name.</p>
            )}
          </div>
        </div>
      )}

      <div className="nav-container">
        <div className="nav-combine">
          <div className="menu-bar" onClick={handleMenu}>
            {isMobile ? (
              <FaXmark style={{ fontSize: "20px" }} />
            ) : (
              <RxHamburgerMenu style={{ fontSize: "20px" }} />
            )}
          </div>
          <Link to="/">Brownlee</Link>
        </div>
        <div
          className={`nav-link ${isMobile ? "mobile active" : ""}`}
          onClick={() => setIsMobile(false)} >
          <div className="mobile-user-drop">
            {!user ? (
              <>
                <Link to="/product" style={NavLink}>
                  Products
                </Link>
                <Link to="/blog" style={NavLink}>
                  Blog
                </Link>
              </>
            ) : (
              <>
                <div className="user-info">
                  <div className="card">
                    <span>
                      Welcome! {user?.lastName} {user?.firstName}
                    </span>
                    <p>{user?.email}</p>
                    <Link to="/accountmanagement">ACCOUNT SETTING</Link>
                  </div>
                  <div className="wrapper">
                    <span>
                      <MdOutlineProductionQuantityLimits className="icon" />
                      <Link to="/product">Buy Products</Link>
                    </span>
                    <span>
                      <BsHandbag className="icon" />
                      <Link>My Orders</Link>
                    </span>
                    <span>
                      <IoLocationOutline className="icon" />
                      <Link>Track Orders</Link>
                    </span>
                    <span>
                      <MdOutlineFavoriteBorder className="icon" />
                      <Link>Saved items</Link>
                    </span>
                    <span>
                      <CiBookmark className="icon" />
                      <Link>Pending Items</Link>
                    </span>
                    <span>
                      <SlHome className="icon" />
                      <Link to='/'>My Address</Link>
                    </span>
                  </div>
                </div>
                <span className="delete">
                  <SlUserUnfollow className="icon" />
                  <Link>Delete Account</Link>
                </span>
                <div className="btn">
                  <AiOutlineLogout className="icon" />
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </>
            )}
          </div>
          <div className="combination">
            <Link to="/product" style={NavLink}>
              Products
            </Link>
            <Link to="/blog" style={NavLink}>
              Blog
            </Link>
          </div>

          <form>
            <input
              type="text"
              placeholder="Search product by name"
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
            />
          </form>

          {!user ? (
            <div className="auth">
              <Link to="/login" className="login" style={NavLink}>
                Login
              </Link>
              <Link to="/signup" className="sign-up" style={NavLink}>
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="user-drop" onClick={handleUserDrop}>
              <span>Welcome! {user?.firstName}</span>
              {userDrop ? (
                <MdKeyboardArrowUp style={{ fontSize: "20px" }} />
              ) : (
                <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
              )}
              {userDrop && (
                <div className="user-profile">
                  <div className="wrapper">
                    <Link to='/profile'>
                      <FaRegUser style={{ fontSize: "20px" }} />
                      My Profile
                    </Link>
                    <Link>
                      <CiShop style={{ fontSize: "20px" }} />
                      Orders
                    </Link>
                    <Link>
                      <SlLike style={{ fontSize: "20px" }} />
                      Saved items
                    </Link>
                    <Link>
                      <GoMail style={{ fontSize: "20px" }} />
                      Inbox
                    </Link>
                    <Link>
                      <LuView style={{ fontSize: "20px" }} />
                      Recently Viewed
                    </Link>
                    <Link>
                      <MdOutlineRateReview style={{ fontSize: "20px" }} />
                      Pending Evaluation
                    </Link>
                    <Link to='/contact'>
                      <FaRegAddressCard style={{ fontSize: "20px" }} />
                      Address Book
                    </Link>
                    <Link to='/accountmanagement'>
                      <SlSettings style={{ fontSize: "20px" }} />
                      Account Management
                    </Link>
                    <button>
                      <FiUserX style={{ fontSize: "20px" }} />
                      Delete Account
                    </button>
                  </div>
                  <button onClick={handleLogout}>
                    <IoLogOutOutline style={{ fontSize: "20px" }} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="product-cart" onClick={() => navigate("/cartList")}>
          <div className="card">
            {cartCount > 0 ? <p>{cartCount}</p> : null}
          </div>
          <PiShoppingCartThin style={{ fontSize: "30px" }} />
        </div>
      </div>

      <div className="search-bar">
        <form>
          <input
            type="text"
            placeholder="Search product by name"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </form>
      </div>
    </Fragment>
  );
}

export default Navbar;
