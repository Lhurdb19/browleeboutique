import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Routes/home";
import Login from "./Auth/login";
import Signup from './Auth/signup'
import Product from './Routes/product';
import Productdetail from './Routes/productdetail';
import Trendproduct from "./Routes/trendproduct";
import Cartlist from './cartListView/cartlist';
import Shippingdetails from "./Routes/shippingdetails";
import Orderdetails from "./Routes/orderdetails";
import Paymentdetails from "./Routes/paymentdetails";
import Womenfashion from "./Routes/womenfashion";
import Womendetails from "./Routes/womendetails";
import Menfashion from "./Routes/menfashion";
import Kidsfashion from "./Routes/kidsfashion";
import Shoesfashion from "./Routes/shoesfashion";
import Accessories from "./Routes/accessories";
import Emptycart from "./Routes/emptycart";
import Navbar from './Navigation/navbar';
import Blog from "./Routes/blog";
import Footer from "./Routes/footer";
import Notfound from "./Routes/notfound";
import  {useAuthStore}   from './Lib/store';
import Contact from "./Routes/contact";


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
          <Route path="/shoesfashion" element={<Shoesfashion/>}/>
          <Route path="/kidsfashion" element={<Kidsfashion/>}/>
          <Route path="/accessories" element={<Accessories/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
