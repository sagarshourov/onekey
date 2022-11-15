import logoUrl from "@/assets/images/logo.png";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getBaseApi } from "../../configuration";


import { useState } from "react";

const Login = (props) => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LOGIN_URL = getBaseApi() + "login";

  const handelLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.data?.token;
      const roles = response?.data?.data?.user?.is_admin;

      if (roles === 1) {
        localStorage.setItem("isAdmin", true);
      }



      localStorage.setItem("loggedIn", true);
      localStorage.setItem("token", accessToken);

      navigate("../", { replace: true });
    } catch (err) {
      setLoading(false);
      console.log(err?.response?.data);
    }
  };
  return (
    <>
      <div className="container">
        {/* <DarkModeSwitcher />
        <MainColorSwitcher /> */}
        <div className="w-full min-h-screen p-5 md:p-20 flex items-center justify-center">
          <div className="w-96 intro-y">
            <img
              className="mx-auto w-16"
              alt="Rocketman - Tailwind HTML Admin Template"
              src={logoUrl}
            />
            <div className="text-white dark:text-slate-300 text-2xl font-medium text-center mt-14">
              Login to Your Account!
              {loading && <h1>Loading..</h1>}
            </div>
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
              <input
                type="text"
                className="form-control py-3 px-4 block"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control py-3 px-4 block mt-4"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-slate-500 flex text-xs sm:text-sm mt-4">
                <div className="flex items-center mr-auto">
                  <input
                    type="checkbox"
                    className="form-check-input border mr-2"
                    id="remember-me"
                  />
                  <label
                    className="cursor-pointer select-none"
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#">Forgot Password?</a>
              </div>
              <div className="mt-5 xl:mt-8 text-center xl:text-left">
                <button
                  onClick={handelLogin}
                  className="btn btn-primary w-full xl:mr-3"
                >
                  Login
                </button>
                <Link
                  to="/register"
                  className="btn btn-outline-secondary w-full mt-3"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
