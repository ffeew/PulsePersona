import { useState } from "react";
import UploadFileModal from "./components/UploadFileModal";
import LoginCard from "./components/LoginCard";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [verifySuccess, setVerifySuccess] = useState(false);

  const handleVerify = (file: object) => {
    console.log(file);
    // verify uploaded json file here
    //
    //
    //
    // if verified successfully
    setVerifySuccess(true);
    // else
    // setVerifySuccess(false);
  };

  return (
    <>
      <UploadFileModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        handleVerify={handleVerify}
        verifySuccess={verifySuccess}
      />
      <LoginCard onClickPulsePersona={() => setShowModal(true)} />
    </>
  );
}

export default App;
