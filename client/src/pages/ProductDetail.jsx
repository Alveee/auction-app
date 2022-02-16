import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import PlaceBidModal from "../components/PlaceBidModal";
import BiddingService from "../services/bidding";
import ProductService from "../services/product";
import useUser from "../components/useUser";
import ActivateAutoBidding from "../components/ActivateAutoBidding";
import Timer from "../components/Timer";

const ProductDetail = (props) => {
  const { slug } = useParams();
  const { user } = useUser();
  const [product, setProduct] = useState({});
  const [maxBid, setMaxBid] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isAutoBiddingEnabled, setAutoBidding] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  const getProduct = () => {
    return ProductService.getProductBySlug(slug)
      .then((response) => {
        setProduct(response.data.data);
        getMaxBid(response.data.data._id);
        getAutoBiddingStatus(response.data.data._id);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getAutoBiddingStatus = (productId) => {
    return BiddingService.getAutoBiddingStatus(productId, user.userId)
      .then((response) => {
        setAutoBidding(response.data.data.isAutoBiddingEnabled);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const getMaxBid = (productId) => {
    return BiddingService.getMaxBidById(productId)
      .then((response) => {
        setMaxBid(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const activateAutoBidding = (productId, userId) => {
    return BiddingService.activateAutoBidding(productId, userId)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  };

  const handleActive = (e) => {
    e.preventDefault();
    activateAutoBidding(product._id, user.userId).then((response) => {
      setAutoBidding(response.data.data.isAutoBiddingEnabled);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

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
                  <div className="col-5">
                    <span>Last bid made</span>
                    <p className="fs-3">
                      ${product.lastBidAmount ?? product.minimumBidAmount}
                    </p>
                  </div>
                  <div className="col-7 text-end">
                    <Timer closeDate={product.closeDate} />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <button
                      disabled={maxBid?.userId === user.userId}
                      className="btn btn-primary w-100 mb-3"
                      onClick={() => {
                        if (maxBid?.userId === user.userId) {
                          return alert("You are the highest bidder");
                        } else {
                          setShowModal(true);
                        }
                      }}
                    >
                      Place a bid
                    </button>
                    <ActivateAutoBidding
                      active={isAutoBiddingEnabled}
                      handleChange={handleActive}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal}>
        <PlaceBidModal
          user={user}
          product={product}
          handleClose={hideModal}
          minimumBidAmount={product.lastBidAmount ?? product.minimumBidAmount}
        />
      </Modal>
    </>
  );
};

export default ProductDetail;
