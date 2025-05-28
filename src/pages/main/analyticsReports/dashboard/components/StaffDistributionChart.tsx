const StaffDistributionChart = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white p-6 ">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Staff by Role</h3>
          <p className="text-sm text-gray-500">Distribution of staff roles</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <span className="text-sm">Medical Doctors</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">1,245</div>
              <div className="text-xs text-gray-500">38.3%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-sm">Nurses</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">1,456</div>
              <div className="text-xs text-gray-500">44.8%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
              <span className="text-sm">Technicians</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">324</div>
              <div className="text-xs text-gray-500">10.0%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-orange-500"></div>
              <span className="text-sm">Pharmacists</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">156</div>
              <div className="text-xs text-gray-500">4.8%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-gray-500"></div>
              <span className="text-sm">Others</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">67</div>
              <div className="text-xs text-gray-500">2.1%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDistributionChart;
