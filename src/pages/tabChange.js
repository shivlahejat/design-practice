import React, { useState } from "react";
import styled from "styled-components";
import ReadMore from "./readMore";
import AccordionPage from "./accordianPage";
const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = (index) => {
    switch (index) {
      case 0:
        return <ReadMore />;
      case 1:
        return <AccordionPage />;
      case 2:
        return <ReadMore />;
      case 3:
        return <AccordionPage />;
      default:
        return <ReadMore />;
    }
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "review", label: "Review" },
    { id: "privacy", label: "Privacy" },
    { id: "related", label: "Related" },
  ];

  return (
    <div>
      <TabContainer>
        {tabs.map((tab, index) => (
          <TabButton
            key={tab.id}
            active={activeTab === index}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabContainer>
      {tabs.map((tab, index) => (
        <TabContentContainer key={tab.id} active={activeTab === index}>
          {renderTabContent(index)}
        </TabContentContainer>
      ))}
    </div>
  );
};

export default App;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`;

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  ${(props) => props.active && "box-shadow: 0px 0px 5px 2px #888888;"}
  ${(props) => props.active && "border-radius: 8px;"}
`;

const TabContentContainer = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
`;
