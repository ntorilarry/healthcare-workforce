const StaffDistribution = () => {
  return (
    <div>
      {" "}
      <div className="p-4">
        <h3 className="text-lg font-medium">Staff Distribution by Region</h3>
        <p className="text-sm text-gray-500">
          Overview of staff across different regions
        </p>
      </div>
      <div className="p-4 pt-0">
        <div className="h-[300px] w-full">
          <div className="flex h-full w-full items-end gap-2 pt-2">
            <div className="flex h-full flex-col justify-end gap-2">
              <div className="w-14 text-xs text-gray-500">Greater Accra</div>
              <div
                className="w-full rounded-t bg-blue-500"
                style={{ height: "70%" }}
              ></div>
            </div>
            <div className="flex h-full flex-col justify-end gap-2">
              <div className="w-14 text-xs text-gray-500">Ashanti</div>
              <div
                className="w-full rounded-t bg-blue-500"
                style={{ height: "60%" }}
              ></div>
            </div>
            <div className="flex h-full flex-col justify-end gap-2">
              <div className="w-14 text-xs text-gray-500">Western</div>
              <div
                className="w-full rounded-t bg-blue-500"
                style={{ height: "45%" }}
              ></div>
            </div>
            <div className="flex h-full flex-col justify-end gap-2">
              <div className="w-14 text-xs text-gray-500">Eastern</div>
              <div
                className="w-full rounded-t bg-blue-500"
                style={{ height: "40%" }}
              ></div>
            </div>
            <div className="flex h-full flex-col justify-end gap-2">
              <div className="w-14 text-xs text-gray-500">Central</div>
              <div
                className="w-full rounded-t bg-blue-500"
                style={{ height: "35%" }}
              ></div>
            </div>
            <div className="flex h-full flex-col justify-end gap-2">
              <div className="w-14 text-xs text-gray-500">Northern</div>
              <div
                className="w-full rounded-t bg-blue-500"
                style={{ height: "30%" }}
              ></div>
            </div>
            <div className="flex h-full flex-col justify-end gap-2">
              <div className="w-14 text-xs text-gray-500">Volta</div>
              <div
                className="w-full rounded-t bg-blue-500"
                style={{ height: "25%" }}
              ></div>
            </div>
            <div className="flex h-full flex-col justify-end gap-2">
              <div className="w-14 text-xs text-gray-500">Upper East</div>
              <div
                className="w-full rounded-t bg-blue-500"
                style={{ height: "20%" }}
              ></div>
            </div>
            <div className="flex h-full flex-col justify-end gap-2">
              <div className="w-14 text-xs text-gray-500">Upper West</div>
              <div
                className="w-full rounded-t bg-blue-500"
                style={{ height: "15%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDistribution;
