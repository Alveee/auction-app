import React from "react";

const PlaceBidModal = (props) => {
  const { handleClose, minimumBidAmount } = props;
  return (
    <>
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
            min={minimumBidAmount}
            className="form-control"
            id="bidAmountInput"
          />
        </div>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-primary">
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
    </>
  );
};

export default PlaceBidModal;
