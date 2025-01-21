import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Routes/Home/home';
import Login from "./Auth/login";
import Signup from './Auth/signup';
import Profile from "./Auth/profile";
import Accountmanagement from "./Auth/accountmanagement";
import Product from './Routes/Products/product';
import Productdetail from './Routes/Products/productdetail';
import Trendproduct from "./Routes/Trend/trendproduct";
import Cartlist from './cartListView/cartlist';
import Shippingdetails from './Routes/Shippingdetail/shippingdetails';
import Orderdetails from "./Routes/Order/orderdetails";
import Paymentdetails from './Routes/Payment/paymentdetails';
import Womenfashion from './Routes/Women/womenfashion';
import Womendetails from './Routes/Women/womendetails';
import Womenslider from './Routes/Slider/womenslider';
import Menfashion from './Routes/Men/menfashion';
import Kidsfashion from './Routes/Kids/kidsfashion';
import Shoesfashion from './Routes/Shoes/shoesfashion';
import Accessories from "./Routes/accessories";
import Emptycart from './Routes/Emptycart/emptycart';
import Navbar from './Navigation/navbar';
import Blog from './Routes/Blog/blog';
import Footer from './Routes/Footer/footer';
import Notfound from "./Routes/notfound";
import  {useAuthStore}   from './Lib/store';
import Contact from './Routes/Contact/contact';


function App() {
  const user = useAuthStore((state) => state.user);
  const Logout = useAuthStore((state) => state.Logout);

  return (
   <Router>
      <div>
      
        <Navbar user={user} handleLogout={Logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="blog" element={<Blog/>}/>
          <Route path="/womenfashion" element={<Womenfashion/>}/>
          <Route path="/menfashion" element={<Menfashion/>}/>
          <Route path="womenslider" element={<Womenslider/>}/>
          <Route path="/shoesfashion" element={<Shoesfashion/>}/>
          <Route path="/kidsfashion" element={<Kidsfashion/>}/>
          <Route path="/accessories" element={<Accessories/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/accountmanagement" element={<Accountmanagement/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cartlist" element={<Cartlist />} />
          <Route path="/shippingdetails" element={<Shippingdetails/>}/>
          <Route path="/orderdetails" element={<Orderdetails/>}/>
          <Route path="/paymentdetails" element={<Paymentdetails/>}/>
          <Route path="/emptycart" element={<Emptycart/>}/>
          <Route path="/products/:productId" element={<Productdetail/>} />
          <Route path="/womenfashion/:womenId" element={<Womendetails/>}/>
          <Route path="/trendproduct" element={<Trendproduct/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
