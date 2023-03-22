import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import { Outlet, Routes, Route } from "react-router-dom";
import ContactPage from "./routes/ContactPage";
import HomePage from "./routes/HomePage";
import CheckoutPage from "./routes/CheckoutPage";

// localhost:3000 -> home page

function Footer() {
  return <footer>Website footer</footer>;
}

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
