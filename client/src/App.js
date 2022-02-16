import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Settings from "./pages/Settings";
import useUser from "./components/useUser";

const App = () => {
  const { user, setUser } = useUser();

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:slug" element={<ProductDetail />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
