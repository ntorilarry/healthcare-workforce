const Specializations = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Specializations</h3>
          <p className="text-sm text-gray-500">
            Medical specializations across the workforce
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Internal Medicine</span>
              <span className="text-sm font-medium">234</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-[78%] rounded-full bg-blue-500"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Surgery</span>
              <span className="text-sm font-medium">189</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-[63%] rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Pediatrics</span>
              <span className="text-sm font-medium">156</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-[52%] rounded-full bg-purple-500"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Obstetrics & Gynecology</span>
              <span className="text-sm font-medium">134</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-[45%] rounded-full bg-orange-500"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Emergency Medicine</span>
              <span className="text-sm font-medium">98</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-[33%] rounded-full bg-red-500"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Radiology</span>
              <span className="text-sm font-medium">67</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-[22%] rounded-full bg-indigo-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specializations;
