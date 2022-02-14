import React from "react";
import Product from "./Product";

const ProductList = () => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col mb-4">
                <Product />
            </div>
            <div className="col mb-4">
                <Product />
            </div>
            <div className="col mb-4">
                <Product />
            </div>
            <div className="col mb-4">
                <Product />
            </div>
        </div>
    );
};

export default ProductList;