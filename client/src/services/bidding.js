import http from "./http";

const BiddingService = {
  getMaxBidById(productId) {
    return http.get(`/products/${productId}/bids/max`);
  },

  submitBid(slug, productId, userId, amount) {
    return http.post(`/products/${slug}/bids`, { productId, userId, amount });
  },

  activateAutoBidding(productId, userId) {
    return http.post(`/products/activate/auto-bidding`, { productId, userId });
  },
};

export default BiddingService;
