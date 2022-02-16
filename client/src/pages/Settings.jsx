import React, { useState } from "react";
import Header from "../components/Header";
import useUser from "../components/useUser";
import UserService from "../services/user";

const Settings = (props) => {
  const { user, setUser } = useUser();
  const [maxBidAmount, setMaxBidamount] = useState(user.maxBidAmount);
  const [bidAlertPercentage, setbidAlertPercentage] = useState(
    user.bidAlertPercentage
  );
  const updateSettings = (userId, maxBidAmount, bidAlertPercentage) => {
    return UserService.updateSettings(userId, maxBidAmount, bidAlertPercentage)
      .then((response) => {
        return response.data.data.user;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings(user.userId, maxBidAmount, bidAlertPercentage).then(
      (data) => {
        let updatedUser = {
          ...user,
          maxBidAmount: data.maxBidAmount,
          bidAlertPercentage: data.bidAlertPercentage,
        };
        setUser(updatedUser);
      }
    );
  };
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h6 className="text-muted">Settings</h6>
        <h2>Configure the Auto-bidding</h2>
        <form onSubmit={handleSubmit}>
          <div className="row flex-column">
            <div className="col-md-6 mt-5 ">
              <h4>Maximum bid amount</h4>
              <p className="fst-italic fw-lighter">
                <small>
                  This maximum amount will be split between all items where we
                  have activated auto-bidding Be mindful of the concurrency
                  issues with auto-bidding!
                </small>
              </p>
              <div className="input-group mb-3 w-md-50">
                <span
                  className="input-group-text bg-transparent ps-4"
                  id="basic-addon1"
                >
                  <strong>$</strong>
                </span>
                <input
                  type="number"
                  onChange={(e) => setMaxBidamount(e.target.value)}
                  value={maxBidAmount}
                  className="form-control border-start-0"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <h4>Bid Alert notification</h4>
              <p className="fst-italic fw-lighter">
                <small>Get the notification about your reserved bids</small>
              </p>
              <div className="input-group mb-3">
                <input
                  type="number"
                  onChange={(e) => setbidAlertPercentage(e.target.value)}
                  value={bidAlertPercentage}
                  className="form-control border-end-0"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <span
                  className="input-group-text bg-transparent pe-4"
                  id="basic-addon1"
                >
                  <strong>%</strong>
                </span>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <button className="btn btn-primary w-100">Save</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Settings;
