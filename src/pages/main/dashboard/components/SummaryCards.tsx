import {
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
  FaUsers,
} from "react-icons/fa";

const SummaryCards = () => {
  return (
    <div>
      {" "}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="flex flex-row items-center justify-between p-4 pb-2">
            <h3 className="text-sm font-medium">Total Staff</h3>
            <FaUsers className="h-4 w-4 text-gray-500" />
          </div>
          <div className="p-4 pt-0">
            <div className="text-2xl font-bold">3,248</div>
            <p className="text-xs text-gray-500">+12 this month</p>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="flex flex-row items-center justify-between p-4 pb-2">
            <h3 className="text-sm font-medium">Active Staff</h3>
            <FaCheckCircle className="h-4 w-4 text-green-500" />
          </div>
          <div className="p-4 pt-0">
            <div className="text-2xl font-bold">2,986</div>
            <p className="text-xs text-gray-500">92% of total workforce</p>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="flex flex-row items-center justify-between p-4 pb-2">
            <h3 className="text-sm font-medium">Retired</h3>
            <FaClock className="h-4 w-4 text-gray-500" />
          </div>
          <div className="p-4 pt-0">
            <div className="text-2xl font-bold">187</div>
            <p className="text-xs text-gray-500">+8 this quarter</p>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="flex flex-row items-center justify-between p-4 pb-2">
            <h3 className="text-sm font-medium">Pending Verifications</h3>
            <FaExclamationCircle className="h-4 w-4 text-amber-500" />
          </div>
          <div className="p-4 pt-0">
            <div className="text-2xl font-bold">75</div>
            <p className="text-xs text-gray-500">Requires attention</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
