import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Menu from "./components/Pages/Menu/Menu";
import Login from "./components/Forms/Login/Login";
import Signup from "./components/Forms/Signup/Signup";
// import Reviewspage from "./components/Pages/Reviewspage";
import Contact from "./components/Pages/Contact/Contact";
import Cart from "./components/Pages/Cart/Cart";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="/reviews" element={Reviews} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
