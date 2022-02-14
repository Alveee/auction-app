import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="256" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <p className="mb-0">Product Name</p>
                        <p className="fw-lighter text-muted mb-0"><small>Product Description</small></p>
                    </div>
                    <div className="">
                        <Link to="/product/slug">
                            <button type="button" className="btn btn-sm btn-outline-secondary rounded-pill">Bid now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;