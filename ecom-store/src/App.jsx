import React from "react";
import Header from "./components/header";
import { Outlet, Routes, Route } from "react-router-dom";
import ContactPage from "./routes/ContactPage";
import ProductsPage from "./routes/ProductsPage";

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
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
