import React, { useEffect, useState } from "react";
import Product from "./Product";
import ProductService from "../services/product";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    ProductService.getAll()
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {products.map((product) => {
        return (
          <div key={product._id} className="col mb-4">
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
