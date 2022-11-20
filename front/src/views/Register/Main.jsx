import { Link } from "react-router-dom";
import logoUrl from "@/assets/images/logo.png";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";

import { Lucide } from "@/base-components";

import axios from "axios";
import { getBaseApi } from "../../configuration";
import { useState } from "react";
const Register = () => {
  const [loading, setLoading] = useState(false);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [err, setErr] = useState([]);
  const [info, setInfo] = useState([]);

  

  const LOGIN_URL = getBaseApi() + "register";

  const handelRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ first, last, email, phone }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setErr([]);

      setInfo(["Regstration Success ! You will recive an short Message soon."]);
      setFirst("");
      setLast("");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setInfo([]);
      if (err?.response?.data.success) {
        setErr([]);
        console.log("success");
      } else {
        console.log("error");
        err?.response?.data?.data &&
          setErr(Object.values(err.response.data.data));
      }

      // console.log(err?.response?.data?.data);
    }
  };

  return (
    <>
      <div className="container">
        <DarkModeSwitcher />

        <div className="w-full min-h-screen p-5 md:p-20 flex items-center justify-center">
          <div className="w-96 intro-y">
            <img
              className="mx-auto w-16"
              alt="Rocketman - Tailwind HTML Admin Template"
              src={logoUrl}
            />
            <div className="text-white dark:text-slate-300 text-2xl font-medium text-center mt-14">
              Register a New Account
            </div>
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
              {err.length > 0 &&
                err.map((text, key) => {
                  return (
                    <h3 className="text-danger" key={key}>
                      {text}
                    </h3>
                  );
                })}

              {info.length > 0 &&
                info.map((text, key) => {
                  return (
                    <h3 className="text-info" key={key}>
                      {text}
                    </h3>
                  );
                })}

              <div className="input-group pt-3">
                <div id="input-group-fname" className="input-group-text">
                  <Lucide icon="User" className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  onChange={(e) => setFirst(e.target.value)}
                  className="form-control  px-4 block"
                  placeholder="First Name"
                />
              </div>
              <div className="input-group pt-3">
                <div id="input-group-lname" className="input-group-text">
                  <Lucide icon="User" className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  onChange={(e) => setLast(e.target.value)}
                  className="form-control  px-4 block"
                  placeholder="Last Name"
                />
              </div>
              <div className="input-group pt-3">
                <div id="input-group-email" className="input-group-text">
                  <Lucide icon="Mail" className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control  px-4 block"
                  placeholder="Email"
                />
              </div>
              <div className="input-group pt-3 ">
                <div id="input-group-email" className="input-group-text">
                  <Lucide icon="Phone" className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control px-4 block"
                  placeholder="Phone"
                />
              </div>

              <div className="flex items-center text-slate-500 mt-4 text-xs sm:text-sm">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="form-check-input border mr-2"
                />
                <label
                  className="cursor-pointer select-none"
                  htmlFor="remember-me"
                >
                  I agree to the OneKey Visa
                </label>
                <a className="text-primary dark:text-slate-200 ml-1" href="">
                  Privacy Policy
                </a>
                .
              </div>
              <div className="mt-5 xl:mt-8 text-center xl:text-left">
                <button
                  onClick={handelRegister}
                  className="btn btn-primary w-full xl:mr-3"
                >
                  Register

                  
                  {loading && (
                    <LoadingIcon
                      icon="three-dots"
                      color="white"
                      className="w-4 h-4 ml-2"
                    />
                  )}
                </button>
                <Link
                  to="/login"
                  className="btn btn-outline-secondary w-full mt-3"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
