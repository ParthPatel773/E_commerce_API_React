import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Category from "./Category";
import SubCategory from "./SubCategory";
import Product from "./Product";
import Details from "./Details";

function App() {
  return (
    <>
      <Router>
        <Link to="/"></Link> <br /> <br />
        <Link to="/Category">Category</Link> <br /> <br />
        <br />
        <Routes>
          <Route path="/"  element={<Category />}  />
          <Route path="/category" element={<Category />} />
          <Route path="/subcategory/:id" element={<SubCategory />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/details/:id" element={<Details />} />

        </Routes>
      </Router>
      
    </>
  );
}

export default App;

