import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import {
  FiCheckCircle,
  FiFileText,
  FiMapPin,
  FiUserPlus,
} from "react-icons/fi";
import { BarChart, LineChart, PieChart } from "./Charts";

const TabsOverview = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  return (
    <div>
      {" "}
      <TabGroup
        selectedIndex={["overview", "analytics", "reports"].indexOf(
          selectedTab
        )}
        onChange={(index) =>
          setSelectedTab(["overview", "analytics", "reports"][index])
        }
      >
        <div className="flex items-center">
          <TabList className="flex space-x-1 rounded-lg bg-gray-100 p-1">
            <Tab
              className={`py-1.5 px-3 text-sm font-medium rounded-md ${
                selectedTab === "overview"
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Overview
            </Tab>
            <Tab
              className={`py-1.5 px-3 text-sm font-medium rounded-md ${
                selectedTab === "analytics"
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Analytics
            </Tab>
            <Tab
              className={`py-1.5 px-3 text-sm font-medium rounded-md ${
                selectedTab === "reports"
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Reports
            </Tab>
          </TabList>
          <div className="ml-auto flex items-center gap-2">
            <button className="flex items-center gap-2 text-sm border border-neutral-200 rounded-md px-3 py-1.5 hover:bg-gray-50">
              <FiFileText className="h-3.5 w-3.5" />
              Export
            </button>
          </div>
        </div>
        <TabPanels className="mt-4">
          <TabPanel className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="border border-neutral-200 bg-white rounded-lg lg:col-span-4">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Staff per Region</h3>
                  <p className="text-sm text-gray-600">
                    Distribution of healthcare workers across regions
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <BarChart />
                </div>
              </div>
              <div className="border border-neutral-200 bg-white rounded-lg lg:col-span-3">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    Upcoming Retirements
                  </h3>
                  <p className="text-sm text-gray-600">
                    Staff retiring in the next 12 months
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <LineChart />
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="border border-neutral-200 bg-white rounded-lg lg:col-span-3">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    Certifications Expiring
                  </h3>
                  <p className="text-sm text-gray-600">
                    Licenses and certifications expiring soon
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <PieChart />
                </div>
              </div>
              <div className="border border-neutral-200 bg-white rounded-lg lg:col-span-4">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Recent Activities</h3>
                  <p className="text-sm text-gray-600">
                    Latest system activities and updates
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-blue-100 p-2">
                        <FiUserPlus className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          New staff member added
                        </p>
                        <p className="text-sm text-gray-600">
                          Dr. Sarah Johnson - Cardiologist
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>2 hours ago</span>
                          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            Central Hospital
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-amber-100 p-2">
                        <FiCheckCircle className="h-4 w-4 text-amber-500" />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Certification verified
                        </p>
                        <p className="text-sm text-gray-600">
                          Nursing License - James Wilson
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>Yesterday</span>
                          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            Northern Region
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-teal-100 p-2">
                        <FiMapPin className="h-4 w-4 text-teal-500" />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Staff transfer approved
                        </p>
                        <p className="text-sm text-gray-600">
                          Emily Chen - From Eastern to Western Region
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>2 days ago</span>
                          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            Transfer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="space-y-4">
            <div className="border border-neutral-200 bg-white rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold">Advanced Analytics</h3>
                <p className="text-sm text-gray-600">
                  Detailed workforce analytics and trends
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="h-[300px] flex items-center justify-center border border-neutral-200 bg-white rounded-md">
                  <p className="text-gray-500">
                    Advanced analytics content will appear here
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="space-y-4">
            <div className="border border-neutral-200 bg-white rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold">Generated Reports</h3>
                <p className="text-sm text-gray-600">
                  Access and manage your generated reports
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="h-[300px] flex items-center justify-center border border-neutral-200 bg-white rounded-md">
                  <p className="text-gray-500">
                    Reports content will appear here
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default TabsOverview;
