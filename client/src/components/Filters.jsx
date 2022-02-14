import React from "react";

const Filters = () => {
    return (
        <div className="row flex-column mt-4">
            <div className="col mb-3">
                <div className="mb-3">
                    <label className="form-label">Arrange</label>
                    <select className="form-select mt-0" aria-label="sort by arrange" id="arrange">
                        <option value="popular" selected>Popular</option>
                        <option value="recent">Recent</option>
                        <option value="latest">Latest</option>
                    </select>
                </div>
            </div>
            <div className="col mb-3">
                <div className="mb-3">
                    <label className="form-label">Minimum Bid</label>
                    <input type="range" className="form-range" min="0" max="5" id="range" />
                </div>
            </div>
            <div className="col mb-3">
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label">
                            Default checkbox
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label className="form-check-label">
                            Checked checkbox
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;