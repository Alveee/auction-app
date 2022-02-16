import http from "./http";

const BiddingService = {
  getMaxBidById(productId) {
    return http.get(`/products/${productId}/bids/max`);
  },
};

export default BiddingService;
