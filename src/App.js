import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route path="/about" exact element={<About></About>} />
          <Route path="/products" exact element={<Products></Products>} />
          <Route path="/analytics" exact element={<Analytics></Analytics>} />
          <Route path="/setting" exact element={<Settings></Settings>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
