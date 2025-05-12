const UpcomingRetirements = () => {
  return (
    <div>
      {" "}
      <div className="p-4">
        <h3 className="text-lg font-medium">Upcoming Retirements</h3>
        <p className="text-sm text-gray-500">
          Staff retiring in the next 12 months
        </p>
      </div>
      <div className="p-4 pt-0">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="text-sm">Next 3 months</div>
              <div className="text-sm font-medium">24 staff</div>
            </div>
            <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-blue-600"
                style={{ width: "24%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="text-sm">4-6 months</div>
              <div className="text-sm font-medium">36 staff</div>
            </div>
            <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-blue-600"
                style={{ width: "36%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="text-sm">7-9 months</div>
              <div className="text-sm font-medium">52 staff</div>
            </div>
            <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-blue-600"
                style={{ width: "52%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="text-sm">10-12 months</div>
              <div className="text-sm font-medium">41 staff</div>
            </div>
            <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-blue-600"
                style={{ width: "41%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingRetirements;
