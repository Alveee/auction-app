import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Settings from './pages/Settings';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/product/:slug" element={<ProductDetail />} />
                <Route exact path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
}

export default App;