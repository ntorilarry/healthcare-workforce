const TurnOver = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Turnover by Department</h3>
          <p className="text-sm text-gray-500">
            Annual turnover rates by department
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Emergency</span>
            <div className="text-right">
              <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                12.5%
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Surgery</span>
            <div className="text-right">
              <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                8.3%
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Internal Medicine</span>
            <div className="text-right">
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                5.2%
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Pediatrics</span>
            <div className="text-right">
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                4.8%
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Radiology</span>
            <div className="text-right">
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                3.1%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnOver;
