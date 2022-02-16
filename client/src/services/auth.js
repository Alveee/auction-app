import http from "./http";

const AuthService = {
  login(credentials) {
    return http.post("/login", credentials);
  },
};

export default AuthService;
