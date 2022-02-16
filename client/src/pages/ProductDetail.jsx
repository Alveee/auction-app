import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import PlaceBidModal from "../components/PlaceBidModal";
import ProductService from "../services/product";

const ProductDetail = (props) => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  const getProduct = () => {
    ProductService.getProductBySlug(slug)
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const calculateTimeLeft = () => {
    let difference = +new Date(product.closeDate) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={index}>
        {timeLeft[interval]} {interval === "seconds" ? "" : ": "}
      </span>
    );
  });

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row align-items-stretch">
          <div className="col-md-7">
            <img src={product.image} alt="product name" className="img-fluid" />
          </div>
          <div className="col-md-5">
            <div className="card mt-4 bg-transparent border-0">
              <div className="card-body">
                <h1 className="card-title">{product.title}</h1>
                <p className="card-text">
                  Minimum bid ${`${product.minimumBidAmount}`}
                </p>
                <h5 className="mt-5">Details</h5>
                <p className="text-muted">{product.description}</p>
                <div className="row mt-4">
                  <div className="col-4">
                    <span>Last bid made</span>
                    <p className="fs-3">$10</p>
                  </div>
                  <div className="col-8 text-end">
                    <span>Available Until</span>
                    <p className="fs-3">
                      {timerComponents.length ? (
                        timerComponents
                      ) : (
                        <span>Bidding is closed!</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <button
                      className="btn btn-primary w-100 mb-3"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      Place a bid
                    </button>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label className="form-check-label">
                        Activate the{" "}
                        <Link to="/settings">
                          <u>auto-bidding</u>
                        </Link>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal}>
        <PlaceBidModal
          handleClose={hideModal}
          minimumBidAmount={product.minimumBidAmount}
        />
      </Modal>
    </>
  );
};

export default ProductDetail;
