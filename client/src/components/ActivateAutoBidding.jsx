import React from "react";
import { Link } from "react-router-dom";

const ActivateAutoBidding = ({ active, handleChange }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        onChange={handleChange}
        type="checkbox"
        checked={active}
      />
      <label className="form-check-label">
        Activate the{" "}
        <Link to="/user/profile/settings">
          <u>auto-bidding</u>
        </Link>
      </label>
    </div>
  );
};

export default ActivateAutoBidding;
