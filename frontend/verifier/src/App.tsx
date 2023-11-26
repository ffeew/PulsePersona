import { useState } from "react";
import UploadFileModal from "./components/UploadFileModal";
import PulsePersona from "./assets/svgs/PulsePersona";
import google from "./assets/images/google.png";
import Logo from "./assets/svgs/Logo";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    setShowModal(true);
  };

  return (
    <>
      <UploadFileModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />

      <div className="container-screen flex-all-center">
        <div className=" w-[500px] flex-col-all-center space-y-5 px-10 py-7 bg-white drop-shadow-card rounded-3xl">
          <div className="flex-col-all-center space-y-1">
            <Logo className="text-theme-black" />
            <p className="font-medium">Log in to your account</p>
          </div>
          <input
            type="text"
            placeholder="Email"
            className="w-full py-4 px-5 bg-theme-input-bg rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-4 px-5 bg-theme-input-bg rounded-xl"
          />
          <div className="w-full flex flex-row justify-between items-center">
            <button
              className="flex-row-all-center space-x-2"
              onClick={() => setRememberMe((prev) => !prev)}
            >
              <div
                className={`w-3 h-3 ${
                  rememberMe ? "border-4" : "border"
                } border-theme-black rounded-full`}
              ></div>
              <p className="font-medium text-xs">Remember me</p>
            </button>
            <button>
              <p className="font-medium text-xs underline">Forgot password ?</p>
            </button>
          </div>
          <button className="w-full flex-all-center py-4 bg-theme-black rounded-xl">
            <p className="text-sm font-semibold text-white uppercase">Login</p>
          </button>
          <button className="w-full flex-row-all-center space-x-4 py-4 border border-theme-black rounded-xl">
            <img src={google} alt="google" className="w-[14px] h-[14px]" />
            <p className="text-sm font-semibold uppercase">
              Continue with google
            </p>
          </button>
          <button
            className="w-full flex-row-all-center space-x-4 py-4 border border-theme-black rounded-xl"
            onClick={handleLogin}
          >
            <PulsePersona className="text-theme-black" />
            <p className="text-sm font-semibold uppercase">
              Continue with PulsePersona
            </p>
          </button>
          <div className="w-full flex justify-start items-center">
            <button>
              <p className="font-medium text-xs">
                Do not have an account?{" "}
                <span className="underline">Sign up</span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
