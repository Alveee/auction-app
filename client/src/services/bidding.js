import http from "./http";

const BiddingService = {
  getMaxBidById(productId) {
    return http.get(`/products/${productId}/bids/max`);
  },

  submitBid(slug, productId, userId, amount) {
    return http.post(`/products/${slug}/bids`, { productId, userId, amount });
  },
};

export default BiddingService;
