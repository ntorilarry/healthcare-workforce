import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import AgeDistributionChart from "./AgeDistributionChart";
import RegionalDistributionChart from "./RegionalDistributionChart";
import StaffDistributionChart from "./StaffDistributionChart";
import EmploymentDistributionChart from "./EmploymentDistributionChart";
import EducationLevelsChart from "./EducationLevelsChart";
import CertificationStatus from "./CertificationStatus";
import Specializations from "./Specializations";
import TurnOver from "./TurnOver";
import RetentionRateChart from "./RetentionRateChart";
import TrainingCompletion from "./TrainingCompletion";
import PerformanceRatings from "./PerformanceRatings";
import WorkforceGrowthChart from "./WorkforceGrowthChart";
import HiringTrendsChart from "./HiringTrendsChart";
import RetirementProjection from "./RetirementProjection";

const AnalyticsCharts = () => {
  const [selectedTab, setSelectedTab] = useState("workforce");

  const tabs = [
    { id: "workforce", label: "Workforce" },
    { id: "qualifications", label: "Qualifications" },
    { id: "performance", label: "Performance" },
    { id: "trends", label: "Trends" },
  ];
  return (
    <TabGroup
      selectedIndex={tabs.findIndex((tab) => tab.id === selectedTab)}
      onChange={(index) => setSelectedTab(tabs[index].id)}
    >
      <TabList className="grid w-full grid-cols-4 gap-1 rounded-lg bg-gray-100 p-1">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            className={({ selected }) =>
              `rounded-md py-2 text-sm font-medium focus:outline-none ${
                selected
                  ? "bg-white shadow"
                  : "text-gray-500 hover:text-gray-700"
              }`
            }
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>

      {/* Workforce Tab */}
      <TabPanels className="mt-6 space-y-6">
        <TabPanel>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <AgeDistributionChart />
            </div>
            <div>
              <RegionalDistributionChart />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-4">
            <div>
              {" "}
              <StaffDistributionChart />
            </div>
            <div>
              {" "}
              <EmploymentDistributionChart />
            </div>
          </div>
        </TabPanel>

        {/* Qualifications Tab */}
        <TabPanel>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <EducationLevelsChart />
            </div>
            <div>
              <CertificationStatus />
            </div>
          </div>

          <div className="mt-6">
            <Specializations />
          </div>
        </TabPanel>

        {/* Performance Tab */}
        <TabPanel>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <RetentionRateChart />
            </div>

            <div>
              <TurnOver />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div>
              <TrainingCompletion />
            </div>

            <div>
              <PerformanceRatings />
            </div>
          </div>
        </TabPanel>

        {/* Trends Tab */}
        <TabPanel>
          <div className="grid gap-6">
            <div>
              <WorkforceGrowthChart />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <HiringTrendsChart />
              </div>

              <div>
                <RetirementProjection />
              </div>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default AnalyticsCharts;
