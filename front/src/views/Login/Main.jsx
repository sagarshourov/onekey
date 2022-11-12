import logoUrl from "@/assets/images/logo.png";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";
import MainColorSwitcher from "@/components/main-color-switcher/Main";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();
  const handelLogin = () => {
    console.log("logged in");
    localStorage.setItem("loggedIn", true);

    navigate("../", { replace: true });
  };
  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        <MainColorSwitcher />
        <div className="w-full min-h-screen p-5 md:p-20 flex items-center justify-center">
          <div className="w-96 intro-y">
            <img
              className="mx-auto w-16"
              alt="Rocketman - Tailwind HTML Admin Template"
              src={logoUrl}
            />
            <div className="text-white dark:text-slate-300 text-2xl font-medium text-center mt-14">
              Login to Your Account!
            </div>
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
              <input
                type="text"
                className="form-control py-3 px-4 block"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control py-3 px-4 block mt-4"
                placeholder="Password"
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
