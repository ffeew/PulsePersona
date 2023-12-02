import { useState } from "react";
import background from "./assets/background.png";
import Logo from "./assets/Logo";
import { ethers } from "ethers";
import './assets/abi.json';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const contractAddress = '0xa34a080a97A01f340f853Af69Fe7487E73561aA0';
  const abi = ['./assets/abi.json'];

  

  const handleGenerate = async () => {
    try {
      const dataToHash = `${firstName} ${lastName}`;
      const sha256Hash = ethers.utils.sha256(ethers.utils.toUtf8Bytes(dataToHash));

      console.log('Generated Hash:', sha256Hash);

      
      const transaction = await contract.addHash(sha256Hash);
      await transaction.wait();

      console.log('Hash added to the blockchain successfully.');
    } catch (error) {
      console.error('Error adding hash to the blockchain:', error);
    }
  };


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
          <div className="w-[500px] flex-col-all-center space-y-7 px-10 py-7 bg-white drop-shadow-card rounded-3xl">
            <p className=" font-medium text-center">
              Create Verification Credentials
            </p>
            <div className="w-full grid grid-cols-2 gap-7">
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
            </div>
            <input
              type="text"
              placeholder="DID"
              className="w-full py-4 px-5 bg-theme-input-bg rounded-xl"
              onChange={(e) => setLastName(e.target.value.trim())}
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full py-4 px-5 bg-theme-input-bg rounded-xl"
              onChange={(e) => setLastName(e.target.value.trim())}
            />
            <input
              type="text"
              placeholder="Phone Number"
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
