import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet, Routes, Route } from "react-router-dom";
import ContactPage from "./routes/ContactPage";
import HomePage from "./routes/HomePage";
import CheckoutPage from "./routes/CheckoutPage";
import ProductPage from "./routes/ProductPage";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CheckoutPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
