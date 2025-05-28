const TrainingCompletion = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Training Completion</h3>
          <p className="text-sm text-gray-500">
            Training program completion rates
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Mandatory Training</span>
              <span className="text-sm font-medium">96.8%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-[97%] rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Safety Training</span>
              <span className="text-sm font-medium">89.2%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-[89%] rounded-full bg-blue-500"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Professional Development</span>
              <span className="text-sm font-medium">72.4%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-[72%] rounded-full bg-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCompletion;
