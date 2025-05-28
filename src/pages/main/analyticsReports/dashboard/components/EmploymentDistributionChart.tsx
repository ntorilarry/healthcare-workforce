const EmploymentDistributionChart = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Employment Type</h3>
          <p className="text-sm text-gray-500">
            Distribution by employment status
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-sm">Permanent</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">2,756</div>
              <div className="text-xs text-gray-500">84.9%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <span className="text-sm">Contract</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">389</div>
              <div className="text-xs text-gray-500">12.0%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-orange-500"></div>
              <span className="text-sm">Temporary</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">78</div>
              <div className="text-xs text-gray-500">2.4%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
              <span className="text-sm">Intern</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">25</div>
              <div className="text-xs text-gray-500">0.7%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentDistributionChart;
