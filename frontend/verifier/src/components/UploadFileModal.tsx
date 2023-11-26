import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LoadingCircle from "../assets/svgs/LoadingCircle";
import CancelButton from "../assets/svgs/CancelButton";
import PauseButton from "../assets/svgs/PauseButton";
import MoreButton from "../assets/svgs/MoreButton";
import border from "../assets/images/border.png";
import Document from "../assets/svgs/Document";

interface UploadFileModalProps {
  showModal: boolean;
  closeModal: () => void;
}

interface AnimatedProgressBarProps {
  children: React.ReactNode;
}

export default function UploadFileModal({
  showModal,
  closeModal,
}: UploadFileModalProps) {
  const browseRef = useRef<HTMLInputElement>(null);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [dragEnter, setDragEnter] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDragEnter(false);
    const file = e?.target?.files?.[0];
    console.log(file);
    if (file?.type !== "application/json") {
      alert("Invalid File Type. We only accept JSON files. Please Try Again.");
    } else {
      setShowProgressBar(true);
    }
  };

  const handleClickModalBackground = (e: React.MouseEvent<HTMLElement>) => {
    if (!showProgressBar) {
      e.preventDefault();
      if (e.target === e.currentTarget) {
        close();
      }
    }
  };

  const close = () => {
    setDragEnter(false);
    setShowProgressBar(false);
    setUploadComplete(false);
    closeModal && closeModal();
  };

  useEffect(() => {
    if (showProgressBar) {
      setTimeout(() => {
        setUploadComplete(true);
      }, 5000);
    }
  }, [showProgressBar]);
  return (
    showModal && (
      <div
        className="z-50 overlay container-screen flex-col-all-center space-y-3 px-5 bg-theme-black/30"
        onClick={handleClickModalBackground}
      >
        {!showProgressBar && (
          <div
            className={`w-full max-w-lg flex-col-all-center p-7 rounded-4xl ${
              dragEnter ? "bg-[#F5F5F5]" : "bg-white"
            }`}
          >
            <div className="relative w-full flex-col-all-center">
              <img src={border} alt="border" className="w-auto h-48" />

              <div className="overlay">
                <input
                  ref={browseRef}
                  type="file"
                  name="jsonFile"
                  className="opacity-0"
                  onChangeCapture={handleUpload}
                />
              </div>

              <div className="overlay w-full h-full flex-all-center">
                <input
                  type="file"
                  name="jsonFile"
                  className="w-full h-full opacity-0"
                  onDragEnter={() => setDragEnter(true)}
                  onDragLeave={() => setDragEnter(false)}
                  onChange={handleUpload}
                />
              </div>

              <div className="overlay w-full h-full flex-col-all-center space-y-5 px-5 pointer-events-none">
                <Document className="text-theme-black" />
                <div className="flex-col-all-center space-y-2">
                  <p className="text-sm">
                    Drop your
                    <span className="font-semibold">
                      {" Verifiable Credentials "}
                    </span>
                    {"here, or "}
                    <button
                      className="pointer-events-auto"
                      onClick={() =>
                        browseRef?.current && browseRef.current.click()
                      }
                    >
                      <p className="font-semibold underline">browse</p>
                    </button>
                  </p>
                  <p className="text-xs font-semibold text-theme-[##C6C6C6]">
                    Supports JSON only
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showProgressBar && (
          <div className="w-full max-w-md flex-col-all-center p-7 rounded-2xl bg-white">
            <div className="relative w-full flex justify-start items-center border border-[#ECECEC] rounded-xl overflow-hidden">
              {uploadComplete ? (
                <div className="w-full flex flex-row justify-between items-center py-3 px-4 bg-[#F7F7F7]">
                  <div className="flex flex-col justify-center items-start ">
                    <p className="text-xs font-semibold">Completed</p>
                    <p className="text-2xs font-medium text-[#999999]">
                      Logging you in . . .
                    </p>
                  </div>
                  <LoadingCircle className="text-theme-black animate-spin" />
                </div>
              ) : (
                <AnimatedProgressBar>
                  <div className="w-full flex-col justify-center items-start py-2 pl-4 pr-3">
                    <div className="w-full flex-row-all-center justify-between items-center">
                      <div className="flex flex-col justify-center items-start">
                        <p className="text-xs font-semibold">Uploading . . .</p>
                        <p className="text-2xs font-medium text-[#999999]">
                          <CountUp start={0} end={100} duration={5} />
                          {"% - "}
                          <CountUp start={5} end={0} duration={5} />
                          {" seconds left"}
                        </p>
                      </div>
                      <div className="flex-row-all-center">
                        <button>
                          <PauseButton className="text-theme-black" />
                        </button>
                        <button>
                          <CancelButton className="text-theme-black" />
                        </button>
                        <button>
                          <MoreButton className="text-theme-black" />
                        </button>
                      </div>
                    </div>
                    <motion.div
                      className="h-[1px] bg-[#999999] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5.5 }}
                    ></motion.div>
                  </div>
                </AnimatedProgressBar>
              )}
            </div>
          </div>
        )}

        {!showProgressBar && (
          <div className="w-full max-w-lg flex justify-center items-center pointer-events-none">
            <button className="pointer-events-auto" onClick={close}>
              <CancelButton className="text-theme-black w-auto h-20" />
            </button>
          </div>
        )}
      </div>
    )
  );
}

function AnimatedProgressBar({ children }: AnimatedProgressBarProps) {
  return (
    <>
      {children}
      <motion.div
        className="overlay w-full h-full bg-[#F7F7F7]"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 5 }}
      ></motion.div>
      <div className="overlay w-full h-full">{children}</div>
    </>
  );
}
