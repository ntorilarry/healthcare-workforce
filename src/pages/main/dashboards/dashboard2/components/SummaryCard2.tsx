import { FiActivity, FiAlertTriangle, FiClock, FiUsers } from "react-icons/fi";

const SummaryCard2 = () => {
  return (
    <div>
      {" "}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="border border-neutral-200 bg-white rounded-lg p-6">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Staff</h3>
            <FiUsers className="h-4 w-4 text-gray-400" />
          </div>
          <div>
            <div className="text-2xl font-bold">2,853</div>
            <p className="text-xs text-gray-500">+12 from last month</p>
          </div>
        </div>
        <div className="border border-neutral-200 bg-white rounded-lg p-6">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-gray-600">Active Staff</h3>
            <FiActivity className="h-4 w-4 text-gray-400" />
          </div>
          <div>
            <div className="text-2xl font-bold">2,584</div>
            <p className="text-xs text-gray-500">90.6% of total workforce</p>
          </div>
        </div>
        <div className="border border-neutral-200 bg-white rounded-lg p-6">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-gray-600">Retired</h3>
            <FiClock className="h-4 w-4 text-gray-400" />
          </div>
          <div>
            <div className="text-2xl font-bold">269</div>
            <p className="text-xs text-gray-500">+8 in the last quarter</p>
          </div>
        </div>
        <div className="border border-neutral-200 bg-white rounded-lg p-6">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-gray-600">
              Pending Verifications
            </h3>
            <FiAlertTriangle className="h-4 w-4 text-amber-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-gray-500">
              <span className="text-amber-500 font-medium">18 urgent</span> -
              expiring soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard2;
