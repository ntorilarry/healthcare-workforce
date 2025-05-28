import KeyMetrics from "./components/KeyMetrics";
import { FaFileImage } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import AnalyticsCharts from "./components/AnalyticsCharts";

const AnalyticsDashboard = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
                <p className="text-gray-500">
                  Comprehensive workforce analytics and insights
                </p>
              </div>
              <div className="flex gap-2">
                <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FaFileImage className="mr-2 h-4 w-4" />
                  Export as PNG
                </button>
                <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FiFileText className="mr-2 h-4 w-4" />
                  Export as PDF
                </button>
              </div>
            </div>

            {/* Key Metrics */}
            <KeyMetrics />

            {/* Charts Section */}
            <AnalyticsCharts />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
