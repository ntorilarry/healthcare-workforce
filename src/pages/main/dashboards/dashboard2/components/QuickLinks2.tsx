import { FiBell, FiCheckCircle, FiFileText, FiUserPlus } from "react-icons/fi";

const QuickLinks2 = () => {
  return (
    <div>
      {" "}
      <div className="p-6">
        <h3 className="text-lg font-semibold">Quick Actions</h3>
        <p className="text-sm text-gray-600">Common administrative tasks</p>
      </div>
      <div className="p-6 pt-0 grid gap-2">
        <button className="w-full flex items-center justify-start text-sm border border-gray-200 rounded-md px-3 py-2 hover:bg-gray-50">
          <FiUserPlus className="mr-2 h-4 w-4" />
          Add New Staff
        </button>
        <button className="w-full flex items-center justify-start text-sm border border-gray-200 rounded-md px-3 py-2 hover:bg-gray-50">
          <FiFileText className="mr-2 h-4 w-4" />
          View Reports
        </button>
        <button className="w-full flex items-center justify-start text-sm border border-gray-200 rounded-md px-3 py-2 hover:bg-gray-50">
          <FiCheckCircle className="mr-2 h-4 w-4" />
          Pending Approvals
        </button>
        <button className="w-full flex items-center justify-start text-sm border border-gray-200 rounded-md px-3 py-2 hover:bg-gray-50">
          <FiBell className="mr-2 h-4 w-4" />
          Send Notifications
        </button>
      </div>
    </div>
  );
};

export default QuickLinks2;
