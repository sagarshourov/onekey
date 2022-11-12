import { Link} from "react-router-dom";
import logoUrl from "@/assets/images/logo.png";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";
import MainColorSwitcher from "@/components/main-color-switcher/Main";

function Main() {
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
              Register a New Account
            </div>
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
              <input
                type="text"
                className="form-control py-3 px-4 block"
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-control py-3 px-4 block mt-4"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="form-control py-3 px-4 block mt-4"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control py-3 block px-4 mt-4"
                placeholder="Password"
              />
              <div className="w-full grid grid-cols-12 gap-4 h-1 mt-3">
                <div className="col-span-3 h-full rounded bg-success"></div>
                <div className="col-span-3 h-full rounded bg-success"></div>
                <div className="col-span-3 h-full rounded bg-success"></div>
                <div className="col-span-3 h-full rounded bg-slate-100 dark:bg-darkmode-800"></div>
              </div>
              <a
                href=""
                className="text-slate-500 block mt-2 text-xs sm:text-sm"
              >
                What is a secure password?
              </a>
              <input
                type="text"
                className="form-control py-3 px-4 block mt-4"
                placeholder="Password Confirmation"
              />
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
                <button className="btn btn-primary w-full xl:mr-3">
                  Register
                </button>
                <Link to="/login" className="btn btn-outline-secondary w-full mt-3">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
