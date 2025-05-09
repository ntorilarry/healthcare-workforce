import { FiAlertTriangle, FiCheckCircle, FiPlus } from "react-icons/fi";

const PendingVerifications = () => {
  const tableData = [
    {
      id: "1",
      name: "Dr. Michael Brown",
      type: "Medical License",
      facility: "Central Hospital",
      expiry: "May 15, 2025",
      status: "Urgent",
    },
    {
      id: "2",
      name: "Nurse Rebecca Adams",
      type: "Nursing License",
      facility: "Western Medical Center",
      expiry: "June 2, 2025",
      status: "Pending",
    },
    {
      id: "3",
      name: "Dr. Kwame Mensah",
      type: "Specialist Certificate",
      facility: "Northern Regional Hospital",
      expiry: "May 28, 2025",
      status: "Urgent",
    },
    {
      id: "4",
      name: "Technician John Doe",
      type: "Lab Technician Cert",
      facility: "Eastern Medical Lab",
      expiry: "July 10, 2025",
      status: "Pending",
    },
  ];

  return (
    <div>
      {" "}
      <div className="p-6 flex flex-row items-center">
        <div>
          <h3 className="text-lg font-semibold">Pending Verifications</h3>
          <p className="text-sm text-gray-600">
            Staff certifications requiring verification
          </p>
        </div>
        <button className="ml-auto flex items-center gap-2 text-sm bg-blue-600 text-white rounded-md px-3 py-1.5 hover:bg-blue-700">
          <FiPlus className="h-3.5 w-3.5" />
          View All
        </button>
      </div>
      <div className="p-6 pt-0">
        <div className="border border-gray-200 bg-white rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Certificate Type
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Facility
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Expiry
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.type}
                    </td>
                    <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.facility}
                    </td>
                    <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.expiry}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.status === "Urgent"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button className="p-1 border rounded-md hover:bg-gray-50">
                          <FiCheckCircle className="h-4 w-4 text-green-500" />
                        </button>
                        <button className="p-1 border rounded-md hover:bg-gray-50">
                          <FiAlertTriangle className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingVerifications;
