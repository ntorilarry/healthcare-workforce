import { FiBarChart2, FiFilter, FiPieChart, FiTable } from "react-icons/fi";
import { RiLineChartLine } from "react-icons/ri";

const ReportComponents = () => {
  return (
    <div>
      {" "}
      <div className="mt-6 rounded-lg border border-neutral-200 bg-white">
        <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Report Components
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Drag components to build your report
          </p>
        </div>
        <div className="p-4 sm:p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 p-3 cursor-move hover:bg-neutral-50">
              <FiBarChart2 className="h-4 w-4 text-blue-500" />
              <span className="text-sm">Bar Chart</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 p-3 cursor-move hover:bg-neutral-50">
              <FiPieChart className="h-4 w-4 text-green-500" />
              <span className="text-sm">Pie Chart</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 p-3 cursor-move hover:bg-neutral-50">
              <RiLineChartLine className="h-4 w-4 text-purple-500" />
              <span className="text-sm">Line Chart</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 p-3 cursor-move hover:bg-neutral-50">
              <FiTable className="h-4 w-4 text-orange-500" />
              <span className="text-sm">Data Table</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 p-3 cursor-move hover:bg-neutral-50">
              <FiFilter className="h-4 w-4 text-red-500" />
              <span className="text-sm">Summary Cards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportComponents;
