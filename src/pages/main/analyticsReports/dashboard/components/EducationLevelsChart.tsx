const EducationLevelsChart = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Education Levels</h3>
          <p className="text-sm text-gray-500">
            Highest education qualifications
          </p>
        </div>
        <div className="h-[300px] w-full">
          <div className="flex h-full w-full items-center justify-center">
            <div className="relative h-48 w-48">
              {/* Base circle */}
              <div className="absolute inset-0 rounded-full border-[20px] border-gray-200"></div>

              {/* PhD segment */}
              <div
                className="absolute inset-0 rounded-full border-[20px] border-blue-500"
                style={{
                  clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)",
                }}
              ></div>

              {/* Masters segment */}
              <div
                className="absolute inset-0 rounded-full border-[20px] border-green-500"
                style={{
                  clipPath: "polygon(50% 50%, 100% 50%, 100% 100%)",
                }}
              ></div>

              {/* Bachelors segment */}
              <div
                className="absolute inset-0 rounded-full border-[20px] border-purple-500"
                style={{
                  clipPath: "polygon(50% 50%, 100% 100%, 50% 100%)",
                }}
              ></div>

              {/* Diploma segment */}
              <div
                className="absolute inset-0 rounded-full border-[20px] border-orange-500"
                style={{
                  clipPath: "polygon(50% 50%, 50% 100%, 0% 100%)",
                }}
              ></div>

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold">3,248</div>
                  <div className="text-xs text-gray-500">Total Staff</div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="ml-8 space-y-2">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm">PhD (12%)</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Masters (28%)</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm">Bachelors (45%)</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-orange-500 mr-2"></div>
                <span className="text-sm">Diploma (15%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationLevelsChart;
