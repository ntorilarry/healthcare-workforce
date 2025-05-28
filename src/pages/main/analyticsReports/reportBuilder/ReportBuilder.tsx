import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { FiSave, FiPlay, FiShare2 } from "react-icons/fi";
import ReportConfiguration from "./components/ReportConfiguration";
import ReportComponents from "./components/ReportComponents";
import ReportCanvas from "./components/ReportCanvas";
import SavedTemplates from "./components/SavedTemplates";
import SchedulingReport from "./components/SchedulingReport";

export const ReportBuilder = () => {
  const [selectedTab, setSelectedTab] = useState("templates");

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Report Builder</h2>
              <p className="text-gray-500">
                Create custom reports with drag-and-drop interface
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <FiShare2 className="mr-2 h-4 w-4" />
                Share Template
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <FiSave className="mr-2 h-4 w-4" />
                Save Template
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <FiPlay className="mr-2 h-4 w-4" />
                Generate Report
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {/* Report Configuration */}
            <div className="lg:col-span-1">
              <ReportConfiguration />

              {/* Available Components */}
              <ReportComponents />
            </div>

            {/* Report Canvas */}
            <div className="lg:col-span-3">
              <ReportCanvas />
            </div>
          </div>

          {/* Report Templates and Scheduling */}
          <TabGroup
            selectedIndex={selectedTab === "templates" ? 0 : 1}
            onChange={(index) =>
              setSelectedTab(index === 0 ? "templates" : "scheduling")
            }
          >
            <TabList className="grid w-full grid-cols-2 rounded-lg bg-gray-100 p-1">
              <Tab
                className={`rounded-md py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  selectedTab === "templates"
                    ? "bg-white shadow"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Saved Templates
              </Tab>
              <Tab
                className={`rounded-md py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  selectedTab === "scheduling"
                    ? "bg-white shadow"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Report Scheduling
              </Tab>
            </TabList>

            {/* Templates Tab */}
            <TabPanels className="mt-6">
              <TabPanel>
                <SavedTemplates />
              </TabPanel>

              {/* Scheduling Tab */}
              <TabPanel>
                <SchedulingReport />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </main>
    </div>
  );
};
