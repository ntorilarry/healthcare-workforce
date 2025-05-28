import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";

const ReportCanvas = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white">
        <div className="border-b border-neutral-200 px-4 py-4 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Report Canvas
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Drag and drop components here to build your report
          </p>
        </div>
        <div className="p-4 sm:p-6">
          <div className="min-h-[600px] rounded-lg border-2 border-dashed border-neutral-200 p-6">
            <div className="space-y-6">
              {/* Sample Report Components */}
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Workforce Summary</h3>
                  <div className="flex items-center gap-2">
                    <button className="rounded-md p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiEdit className="h-4 w-4" />
                    </button>
                    <button className="rounded-md p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiTrash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border border-neutral-200 p-3">
                    <div className="text-2xl font-bold">3,248</div>
                    <div className="text-sm text-gray-500">Total Staff</div>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-3">
                    <div className="text-2xl font-bold">2,986</div>
                    <div className="text-sm text-gray-500">Active Staff</div>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-3">
                    <div className="text-2xl font-bold">187</div>
                    <div className="text-sm text-gray-500">Retired</div>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-3">
                    <div className="text-2xl font-bold">75</div>
                    <div className="text-sm text-gray-500">Pending</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Staff by Region</h3>
                  <div className="flex items-center gap-2">
                    <button className="rounded-md p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiEdit className="h-4 w-4" />
                    </button>
                    <button className="rounded-md p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiTrash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="h-[200px] w-full">
                  <div className="flex h-full w-full items-end gap-2 pt-2">
                    <div className="flex h-full flex-col justify-end gap-2">
                      <div className="w-14 text-xs text-gray-500">
                        Greater Accra
                      </div>
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
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-white p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Staff Details</h3>
                  <div className="flex items-center gap-2">
                    <button className="rounded-md p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiEdit className="h-4 w-4" />
                    </button>
                    <button className="rounded-md p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiTrash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="overflow-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left">
                        <th className="px-4 py-2 font-medium">Name</th>
                        <th className="px-4 py-2 font-medium">Role</th>
                        <th className="px-4 py-2 font-medium">Facility</th>
                        <th className="px-4 py-2 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2">Dr. Kofi Mensah</td>
                        <td className="px-4 py-2">Medical Doctor</td>
                        <td className="px-4 py-2">
                          Korle Bu Teaching Hospital
                        </td>
                        <td className="px-4 py-2">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">Nurse Abena Owusu</td>
                        <td className="px-4 py-2">Registered Nurse</td>
                        <td className="px-4 py-2">Ridge Hospital</td>
                        <td className="px-4 py-2">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Active
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Drop Zone */}
              <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
                <FiPlus className="mx-auto h-8 w-8 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  Drop components here to add them to your report
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCanvas;
