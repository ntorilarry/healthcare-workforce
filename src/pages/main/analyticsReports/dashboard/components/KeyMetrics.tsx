import { FiActivity, FiAward, FiTrendingUp, FiUsers } from "react-icons/fi";
import { LuBuilding } from "react-icons/lu";

const KeyMetrics = () => {
  return (
    <div>
      {" "}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-6 border-neutral-200">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Total Workforce</h3>
            <FiUsers className="h-4 w-4 text-blue-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">3,248</div>
            <div className="flex items-center gap-1 text-xs">
              <FiTrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+2.5%</span>
              <span className="text-gray-500">from last month</span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6 border-neutral-200">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Active Staff</h3>
            <FiActivity className="h-4 w-4 text-green-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">2,986</div>
            <div className="flex items-center gap-1 text-xs">
              <FiTrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+1.8%</span>
              <span className="text-gray-500">from last month</span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6 border-neutral-200">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Facilities</h3>
            <LuBuilding className="h-4 w-4 text-purple-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">45</div>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-gray-500">Across 9 regions</span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6 border-neutral-200">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Avg. Experience</h3>
            <FiAward className="h-4 w-4 text-orange-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">8.2</div>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-gray-500">years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyMetrics;
