import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function Login() {
  //   const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthentication = () => {
    console.log(username, password);
  };

  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-5">
        <div className="flex flex-row space-x-1 justify-center items-center">
          <p className="whitespace-nowrap font-medium">Pulse Persona</p>
        </div>
        <div className="w-80 flex flex-col justify-center items-center space-y-5 p-7 bg-[#36373C] drop-shadow-xl rounded-3xl">
          <div className="w-full flex flex-col space-y-2 justify-center items-start">
            <p className="font-medium">User ID</p>
            <input
              className="w-full py-3 px-3 bg-[#2B2D31] rounded-lg"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col space-y-2 justify-center items-start">
            <p className="font-medium">Password</p>
            <input
              className="w-full py-3 px-3 bg-[#2B2D31] rounded-lg"
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full flex justify-center items-center py-3 bg-theme-accent rounded-lg"
            onClick={handleAuthentication}
          >
            <p className="text-white font-medium">Login</p>
          </button>
        </div>
      </div>
    </div>
  );
}
