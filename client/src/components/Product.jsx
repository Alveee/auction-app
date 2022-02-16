import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;

  return (
    <div className="card shadow-sm">
      <img
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="256"
        src={product.image}
        alt={product.title}
      />

      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="">
            <p className="mb-0">{product.title}</p>
            <p className="fw-lighter text-muted mb-0">
              <small>Product Description</small>
            </p>
          </div>
          <div className="">
            <Link to={`/products/${product.slug}`}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary rounded-pill"
              >
                Bid now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
