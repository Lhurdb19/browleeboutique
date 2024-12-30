import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Routes/home";
import Login from "./Auth/login";
import Signup from './Auth/signup'
import Product from './Routes/product';
import Cartlist from './cartListView/cartlist';
import Shippingdetails from "./Routes/shippingdetails";
import Orderdetails from "./Routes/orderdetails";
import Paymentdetails from "./Routes/paymentdetails";
import Womenfashion from "./Routes/womenfashion";
import Menfashion from "./Routes/menfashion";
import Kidsfashion from "./Routes/kidsfashion";
import Shoesfashion from "./Routes/shoesfashion";
import Accessories from "./Routes/accessories";
import Productdetail from './Routes/productdetail';
import Emptycart from "./Routes/emptycart";
import Navbar from './Navigation/navbar';
import Footer from "./Routes/footer";
import Notfound from "./Routes/notfound";
import  {useAuthStore}   from './Lib/store';


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
          <Route path="/womenfashion" element={<Womenfashion/>}/>
          <Route path="/menfashion" element={<Menfashion/>}/>
          <Route path="/shoesfashion" element={<Shoesfashion/>}/>
          <Route path="/kidsfashion" element={<Kidsfashion/>}/>
          <Route path="/accessories" element={<Accessories/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cartlist" element={<Cartlist />} />
          <Route path="/shippingdetails" element={<Shippingdetails/>}/>
          <Route path="/orderdetails" element={<Orderdetails/>}/>
          <Route path="/paymentdetails" element={<Paymentdetails/>}/>
          <Route path="/emptycart" element={<Emptycart/>}/>
          <Route path="/products/:productId" element={<Productdetail/>} />
          <Route path="*" element={<Notfound/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
