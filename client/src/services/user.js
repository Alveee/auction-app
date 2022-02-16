import http from "./http";

const UserService = {
  updateSettings(userId, maxBidAmount, bidAlertPercentage) {
    return http.put("/users/profile/settings", {
      userId,
      maxBidAmount,
      bidAlertPercentage,
    });
  },
};

export default UserService;
