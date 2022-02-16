import React, { useState } from "react";
import BiddingService from "../services/bidding";

const PlaceBidModal = (props) => {
  const { user, product, handleClose, minimumBidAmount } = props;
  const [bidAmount, setBidAmount] = useState(minimumBidAmount);
  const [validation, setValidation] = useState({});

  const submitBid = () => {
    return BiddingService.submitBid(
      product.slug,
      product._id,
      user.userId,
      bidAmount
    )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err.response;
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitBid().then((response) => {
      if (response.status === 200) {
        alert(response.data.message);
        handleClose();
      } else if (response.status === 400) {
        setValidation(response.data.error);
      }
    });
  };

  return (
    <>
      <form className="needs-validation" onSubmit={handleSubmit}>
        <div className="modal-header">
          <h5 className="modal-title">Place your bid</h5>
          <button
            type="button"
            className="btn-close"
            onClick={handleClose}
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">Enter your bid amount</label>
            <div
              id="bidHelp"
              className="form-text"
            >{`Your minimun bid amount should be greater then $${minimumBidAmount}`}</div>
            <input
              type="number"
              onChange={(e) => setBidAmount(e.target.value)}
              className="form-control"
              id="bidAmountInput"
            />
            {validation && (
              <div className="d-block invalid-feedback">
                {validation.message}
              </div>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button type="submit" className="btn btn-primary">
            Submit Bid
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </form>
    </>
  );
};

export default PlaceBidModal;
