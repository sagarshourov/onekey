import { atom, selector } from "recoil";

export const loginState = atom({
  key: "loginState",
  default: {
    email: "",
    profile_image: localStorage.profile_image
      ? localStorage.getItem("profile_image")
      : "",
    first_name: localStorage.first_name
      ? localStorage.getItem("first_name")
      : "",
    last_name: localStorage.last_name ? localStorage.getItem("last_name") : "",
    isAdmin: localStorage.isAdmin ? localStorage.getItem("isAdmin") : 0,
    token : localStorage.token ? localStorage.getItem("token") : "",
  },
});
