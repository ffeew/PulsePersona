/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useLocation } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground";
import Analytics from "../assets/Analytics";

interface TabProps {
  navigate: any;
  pathname: string;
  tab: {
    name: string;
    path: string;
    icon: React.ReactNode;
  };
}

interface TabClusterProps {
  navigate: any;
  pathname: string;
  array: Array<{
    name: string;
    path: string;
    icon: React.ReactNode;
  }>;
}

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pageTabs = [
    {
      name: "VCs",
      path: "/",
      icon: <Analytics />,
    },
  ];

  const controlTabs = [
    {
      name: "Settings",
      path: "/settings",
      icon: <Analytics />,
    },
  ];

  const authTabs = [
    {
      name: "Logout",
      path: "/logout",
      icon: <Analytics />,
    },
  ];

  return (
    <div className="w-64 h-screen fixed bg-[#2B2D31] flex flex-col justify-between items-center py-14">
      <div className="w-full flex flex-col space-y-20 justify-center items-start">
        {/* logo */}
        <div className="w-full flex flex-row justify-start items-center px-10 space-x-2">
          <p className="font-medium">Pulse Persona</p>
        </div>

        {/* pages tab */}
        <TabCluster pathname={pathname} navigate={navigate} array={pageTabs} />
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        {/* controls tab */}
        <TabCluster
          pathname={pathname}
          navigate={navigate}
          array={controlTabs}
        />

        {/* divider */}
        <div className="w-full py-2 px-10">
          <div className="w-full h-[1px] bg-theme-gray/20 rounded-full" />
        </div>

        {/* auth tab */}
        <TabCluster pathname={pathname} navigate={navigate} array={authTabs} />
      </div>
    </div>
  );
}

function Tab(props: TabProps) {
  const { navigate, pathname, tab } = props;

  return (
    <AnimatedBackground backgroundClassname="bg-[#36373C] rounded-xl">
      <button
        className="pressable group w-full flex flex-row justify-start items-center py-5 px-4 space-x-4"
        onClick={() => navigate(tab.path)}
      >
        <div
          className={`w-4 h-auto ${
            pathname === tab.path ? "text-theme-accent" : "text-theme-gray"
          }`}
        >
          {tab.icon}
        </div>
        <p
          className={`${
            pathname === tab.path ? "text-theme-white" : "text-theme-gray"
          }`}
        >
          {tab.name}
        </p>
      </button>
    </AnimatedBackground>
  );
}

function TabCluster(props: TabClusterProps) {
  const { navigate, pathname, array } = props;

  return (
    <div className="w-full flex flex-col justify-center items-center px-7">
      {array.map((page, index) => (
        <Tab key={index} pathname={pathname} navigate={navigate} tab={page} />
      ))}
    </div>
  );
}
