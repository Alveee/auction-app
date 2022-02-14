import React from "react";
import Header from "../components/Header";

const Settings = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <h6 className="text-muted">Settings</h6>
                <h2>Configure the Auto-bidding</h2>
                <div className="row flex-column">
                    <div className="col-md-6 mt-5 ">
                        <h4>Maximum bid amount</h4>
                        <p className="fst-italic fw-lighter">
                        <small>This maximum amount will be split between all items where we have activated auto-bidding
Be mindful of the concurrency issues with auto-bidding!</small>
                        </p>
                        <div className="input-group mb-3 w-md-50">
                            <span className="input-group-text bg-transparent ps-4" id="basic-addon1"><strong>$</strong></span>
                            <input type="text" className="form-control border-start-0" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <h4>Bid Alert notification</h4>
                        <p className="fst-italic fw-lighter">
                            <small>Get the notification about your reserved bids</small>
                        </p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control border-end-0" aria-label="Username" aria-describedby="basic-addon1" />
                            <span className="input-group-text bg-transparent pe-4" id="basic-addon1"><strong>%</strong></span>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <button className="btn btn-primary w-100">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;