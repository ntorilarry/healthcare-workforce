import { FiCalendar, FiUserPlus } from "react-icons/fi";
import SummaryCard2 from "./components/SummaryCard2";
import TabsOverview from "./components/TabsOverview";
import QuickLinks2 from "./components/QuickLinks2";
import PendingVerifications from "./components/PendingVerifications";

const Dashboard2 = () => {
  return (
    <div>
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="grid gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-600">
                Overview of healthcare workforce management system
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 text-sm border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50">
                <FiCalendar className="h-3.5 w-3.5" />
                <span>Apr 29, 2025</span>
              </button>
              <button className="flex items-center gap-2 text-sm bg-blue-600 text-white rounded-md px-3 py-1.5 hover:bg-blue-700">
                <FiUserPlus className="h-3.5 w-3.5" />
                <span>Add Staff</span>
              </button>
            </div>
          </div>
          <SummaryCard2 />

          <TabsOverview />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-200 bg-white rounded-lg">
              <QuickLinks2 />
            </div>
            <div className="border border-gray-200 bg-white rounded-lg lg:col-span-2">
              <PendingVerifications />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard2;
