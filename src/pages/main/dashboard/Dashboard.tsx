import { FaFileAlt, FaUserPlus } from "react-icons/fa";
import SummaryCards from "./components/SummaryCards";
import StaffDistribution from "./components/StaffDistribution";
import UpcomingRetirements from "./components/UpcomingRetirements";
import CertificationsExpiring from "./components/CertificationsExpiring";
import QuickLinks from "./components/QuickLinks";

export const Dashboard = () => {
  return (
    <div>
      <main className="overflow-auto">
        <div className="grid gap-4 md:gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-500">
                Overview of the healthcare workforce system
              </p>
            </div>
            <div className="flex gap-2">
              <button className="hidden items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 md:flex">
                <FaFileAlt className="h-4 w-4" />
                Export Report
              </button>
              <button className="flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
                <FaUserPlus className="h-4 w-4" />
                Add Staff
              </button>
            </div>
          </div>

          <SummaryCards />

          {/* Charts and Tables */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="rounded-lg border border-gray-200 bg-white lg:col-span-4">
              <StaffDistribution />
            </div>
            <div className="rounded-lg border border-gray-200 bg-white lg:col-span-3">
              <UpcomingRetirements />
            </div>
          </div>

          {/* Certifications Expiring */}
          <CertificationsExpiring />

          {/* Quick Links */}
          <QuickLinks />
        </div>
      </main>
    </div>
  );
};
