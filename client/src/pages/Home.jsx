import React from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const Home = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 pe-5">
                        <h3>Filters</h3>
                        <Filters />
                    </div>
                    <div className="col-md-9">
                        <ProductList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;