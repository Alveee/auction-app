import { useState } from "react";

export default function useUser() {
  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);
    return user ?? "";
  };

  const [user, setUser] = useState(getUser());

  const saveUser = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const removeUser = () => {
    sessionStorage.removeItem("user");
    setUser("");
  };

  return {
    setUser: saveUser,
    user,
    removeUser,
  };
}
