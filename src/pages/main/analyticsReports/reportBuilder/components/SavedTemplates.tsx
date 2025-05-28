import { FiCopy, FiEdit, FiPlay } from "react-icons/fi";

const SavedTemplates = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white">
        <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Saved Report Templates
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Manage your saved report templates
          </p>
        </div>
        <div className="p-4 sm:p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
              <div>
                <h3 className="font-semibold">Monthly Workforce Report</h3>
                <p className="text-sm text-gray-500">
                  Comprehensive monthly report including staff counts,
                  certifications, and performance metrics
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Workforce
                  </span>
                  <span className="text-xs text-gray-500">
                    Created: May 1, 2025
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FiCopy className="mr-2 h-4 w-4" />
                  Duplicate
                </button>
                <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FiEdit className="mr-2 h-4 w-4" />
                  Edit
                </button>
                <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FiPlay className="mr-2 h-4 w-4" />
                  Run
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
              <div>
                <h3 className="font-semibold">Certification Expiry Report</h3>
                <p className="text-sm text-gray-500">
                  Report showing all certifications expiring in the next 90 days
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                    Certification
                  </span>
                  <span className="text-xs text-gray-500">
                    Created: April 15, 2025
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FiCopy className="mr-2 h-4 w-4" />
                  Duplicate
                </button>
                <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FiEdit className="mr-2 h-4 w-4" />
                  Edit
                </button>
                <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FiPlay className="mr-2 h-4 w-4" />
                  Run
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
              <div>
                <h3 className="font-semibold">
                  Regional Performance Dashboard
                </h3>
                <p className="text-sm text-gray-500">
                  Performance metrics and KPIs broken down by region and
                  facility
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Performance
                  </span>
                  <span className="text-xs text-gray-500">
                    Created: March 20, 2025
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FiCopy className="mr-2 h-4 w-4" />
                  Duplicate
                </button>
                <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FiEdit className="mr-2 h-4 w-4" />
                  Edit
                </button>
                <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FiPlay className="mr-2 h-4 w-4" />
                  Run
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedTemplates;
