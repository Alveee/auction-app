import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const ProductDetail = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row align-items-stretch">
                    <div className="col-md-7">
                        <img src="images/default-placeholder.png" alt="product name" className="img-fluid" />
                    </div>
                    <div className="col-md-5">
                        <div className="card mt-4 bg-transparent border-0">
                            <div className="card-body">
                                <h1 className="card-title">Product No1</h1>
                                <p className="card-text">Minimum bid $10</p>
                                <h5 className="mt-5">Details</h5>
                                <p className="text-justify text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tristique nunc convallis in blandit porttitor vitae ridiculus
                                    pellentesque feugiat. Neque suspendisse adipiscing non in
                                    dapibus mauris mi dignissim aliquam. Vulputate diam nisi,
                                    laoreet tellus semper mauris, nibh.

                                    image
                                    Enim feugiat accumsan adipiscing ultrices id viverra
                                    volutpat. Odio magna volutpat turpis felis. Interdum metus
                                    ultricies diam egestas volutpat turpis id odio. Suspendisse
                                    donec adipiscing sed semper risus nibh ultrices mollis.
                                    Malesuada nec vel risus porttitor proin. Nibh vulputate
                                    congue convallis scelerisque diam quis quis interdum.
                                </p>
                                <div className="row mt-4">
                                    <div className="col-7">
                                        <span>Last bid mader</span>
                                        <p className="fs-3">$10</p>
                                    </div>
                                    <div className="col-5">
                                        <span>Available Until</span>
                                        <p className="fs-3">2:30:15</p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col">
                                        <button className="btn btn-primary w-100 mb-3">Bid Now</button>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label" for="defaultCheck1">
                                                Activate the <Link to="/settings"><u>auto-bidding</u></Link>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;