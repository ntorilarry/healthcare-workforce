const PerformanceRatings = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Performance Ratings</h3>
          <p className="text-sm text-gray-500">
            Latest performance review distribution
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Excellent</span>
            <div className="text-right">
              <div className="text-sm font-medium">1,245</div>
              <div className="text-xs text-gray-500">38.3%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Good</span>
            <div className="text-right">
              <div className="text-sm font-medium">1,456</div>
              <div className="text-xs text-gray-500">44.8%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Satisfactory</span>
            <div className="text-right">
              <div className="text-sm font-medium">456</div>
              <div className="text-xs text-gray-500">14.0%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Needs Improvement</span>
            <div className="text-right">
              <div className="text-sm font-medium">91</div>
              <div className="text-xs text-gray-500">2.8%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceRatings;
