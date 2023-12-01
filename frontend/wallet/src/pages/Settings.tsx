import { useState } from "react";
import PageContainer from "../components/PageContainer";

export default function Settings() {
  const [selectedTab, setSelectedTab] = useState<string>("others");

  return (
    <PageContainer
      title="Settings"
      description="Manage your account"
      tabs={[
        { value: "general", display: "General" },
        { value: "key", display: "Private Key" },
      ]}
      onChangeTab={(tab) => setSelectedTab(tab)}
    >
      <p>{selectedTab}</p>
    </PageContainer>
  );
}
