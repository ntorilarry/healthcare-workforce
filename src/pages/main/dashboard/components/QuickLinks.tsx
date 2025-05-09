import { FaCalendarAlt, FaClipboardList, FaFileAlt, FaUserPlus } from "react-icons/fa";

const QuickLinks = () => {
  return (
    <div>
      {" "}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-center">
          <FaUserPlus className="h-10 w-10 text-gray-500 mb-2" />
          <h3 className="text-lg font-medium">Add New Staff</h3>
          <p className="text-sm text-gray-500 mb-4">
            Register a new healthcare worker
          </p>
          <button className="mt-auto rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Add Staff
          </button>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-center">
          <FaFileAlt className="h-10 w-10 text-gray-500 mb-2" />
          <h3 className="text-lg font-medium">View Reports</h3>
          <p className="text-sm text-gray-500 mb-4">
            Access analytics and custom reports
          </p>
          <button className="mt-auto rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            View Reports
          </button>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-center">
          <FaClipboardList className="h-10 w-10 text-gray-500 mb-2" />
          <h3 className="text-lg font-medium">Pending Approvals</h3>
          <p className="text-sm text-gray-500 mb-4">
            Review and approve pending requests
          </p>
          <button className="mt-auto rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            View Approvals
          </button>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-center">
          <FaCalendarAlt className="h-10 w-10 text-gray-500 mb-2" />
          <h3 className="text-lg font-medium">Upcoming Events</h3>
          <p className="text-sm text-gray-500 mb-4">
            View scheduled trainings and events
          </p>
          <button className="mt-auto rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            View Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
