import { useState } from "react";
import background from "./assets/background.png";
import Logo from "./assets/Logo";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleGenerate = () => {
    console.log({ firstName: firstName, lastName: lastName });
  };

  return (
    <>
      <div className="container-screen flex-all-center bg-white">
        <img
          src={background}
          alt=""
          className="container-screen object-cover"
        />

        <div className="overlay container-screen flex-col-all-center space-y-5 px-5">
          <div className="w-full flex-col-all-center space-y-2">
            <Logo className="text-theme-black" />
            <p className="font-semibold text-3xl">Mango Inc.</p>
          </div>
          <div className="w-[400px] flex-col-all-center space-y-7 px-10 py-7 bg-white drop-shadow-card rounded-3xl">
            <p className=" font-medium text-center">
              Create Verification Credentials
            </p>
            <input
              type="text"
              placeholder="First name"
              className="w-full py-4 px-5 bg-theme-input-bg rounded-xl"
              onChange={(e) => setFirstName(e.target.value.trim())}
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full py-4 px-5 bg-theme-input-bg rounded-xl"
              onChange={(e) => setLastName(e.target.value.trim())}
            />
            <button
              className="w-full flex-all-center py-4 bg-theme-red drop-shadow-red rounded-xl"
              onClick={handleGenerate}
            >
              <p className="text-sm font-medium text-white">Generate</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
