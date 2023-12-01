import { useState } from "react";
import MagnifyingGlass from "../assets/MagnifyingGlass";
import PageContainer from "../components/PageContainer";
import ChevronRight from "../assets/ChevronRight";
import ErrorSadFace from "../assets/ErrorSadFace";

interface Vc {
  title: string;
  dateTime: string;
}

interface VcButtonProps {
  vc: Vc;
  onClick: (e: React.MouseEvent<HTMLElement>, vc: Vc) => void;
}

export default function VerificationCredentials() {
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [selectedVc, setSelectedVc] = useState<Vc | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("others");

  const vcs = [
    {
      title: "Singapore University of Technology and Design",
      dateTime: "11:53AM, 23 November 2023",
    },
    { title: "Changi General Hospital", dateTime: "10:34AM, 21 November 2023" },
    { title: "Great Eastern", dateTime: "2:01PM, 20 June 2023" },
  ];

  return (
    <PageContainer
      title="Verfiable Credentials"
      description="Manage your VCs"
      tabs={[
        { value: "others", display: "Other VCs" },
        { value: "personal", display: "Personal VC" },
      ]}
      onChangeTab={(tab) => setSelectedTab(tab)}
    >
      {selectedTab === "others" ? (
        <div className="w-full flex flex-col justify-center items-start space-y-5">
          {selectedVc ? (
            <>
              <div className="flex-row-all-center space-x-2">
                <button
                  className="flex-row-all-center space-x-2"
                  onClick={() => setSelectedVc(null)}
                >
                  <ChevronRight className="w-3 h-auto text-theme-white rotate-180" />
                  <p className="text-theme-white">Back</p>
                </button>
              </div>

              <div className="w-full flex flex-col justify-center items-start p-5 space-y-5 bg-theme-medium-gray rounded-xl">
                <div className="flex flex-col justify-center items-start">
                  <p className="font-light text-theme-light-gray">Issuer</p>
                  <p className="text-lg">{selectedVc.title}</p>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-light text-theme-light-gray">Address</p>
                  <p className="text-lg">asdfghjkl</p>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-light text-theme-light-gray">Date</p>
                  <p className="text-lg">23 November 2023</p>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-light text-theme-light-gray">Time</p>
                  <p className="text-lg">11:53AM</p>
                </div>
                <div className="w-full flex flex-row justify-end items-center space-x-4">
                  <button className="py-3 px-6 rounded-xl bg-theme-light-gray/20">
                    <p>Download</p>
                  </button>
                  <button className="py-3 px-10 rounded-xl bg-red-500">
                    <p>Delete</p>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className={`w-full flex-row-all-center px-4 bg-theme-medium-gray border-2 rounded-xl ${
                  inputFocus
                    ? "border-theme-light-gray/40"
                    : "border-theme-medium-gray"
                }`}
              >
                <MagnifyingGlass className="w-4 h-auto text-theme-white" />
                <input
                  placeholder="Start typing to search VCs"
                  className="w-full py-3 px-5"
                  onFocus={() => setInputFocus(true)}
                  onBlur={() => setInputFocus(false)}
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start p-5 space-y-5 bg-theme-light-gray/20 rounded-xl">
                <p className="text-lg">3 Results</p>
                {vcs.map((vc, index) => (
                  <VcButton
                    key={index}
                    vc={vc}
                    onClick={(e, vc) => setSelectedVc(vc)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center p-5 space-y-5 bg-theme-medium-gray rounded-xl">
          <ErrorSadFace className="w-44 h-auto text-theme-white" />
          <p>You have not generated a personal VC yet.</p>
          <button className="py-3 px-8 rounded-xl bg-theme-light-gray/20">
            <p>Generate</p>
          </button>
        </div>
      )}
    </PageContainer>
  );
}

function VcButton({ vc, onClick }: VcButtonProps) {
  return (
    <button
      className="w-full flex flex-col justify-center items-start px-8 py-5 space-y-2 bg-theme-light-gray/20 border-2 border-theme-medium-gray hover:border-theme-light-gray/40 hover:bg-theme-light-gray/30 rounded-xl"
      onClick={(e) => onClick && onClick(e, vc)}
    >
      <p className="text-lg">{vc.title}</p>
      <p className="text-theme-light-gray font-light text-sm">{vc.dateTime}</p>
    </button>
  );
}
