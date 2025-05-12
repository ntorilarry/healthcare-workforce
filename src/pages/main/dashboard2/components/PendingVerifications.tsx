import { FiAlertTriangle, FiCheckCircle, FiPlus } from "react-icons/fi";
import DataTable, {
  type DataTableColumn,
} from "../../../../components/DataTableBody";

interface VerificationItem {
  id: string;
  name: string;
  type: string;
  facility: string;
  expiry: string;
  status: "Urgent" | "Pending";
}

const PendingVerifications = () => {
  const tableData: VerificationItem[] = [
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

  const columns: DataTableColumn<VerificationItem>[] = [
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Certificate Type",
      accessor: "type",
    },
    {
      header: "Facility",
      accessor: "facility",
      hidden: window.innerWidth < 768,
    },
    {
      header: "Expiry",
      accessor: "expiry",
      hidden: window.innerWidth < 768,
    },
    {
      header: "Status",
      accessor: "status",
      render: (item) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            item.status === "Urgent"
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: "id",
      render: () => (
        <div className="flex justify-end gap-2">
          <button className="p-1 border rounded-md hover:bg-gray-50">
            <FiCheckCircle className="h-4 w-4 text-green-500" />
          </button>
          <button className="p-1 border rounded-md hover:bg-gray-50">
            <FiAlertTriangle className="h-4 w-4 text-red-500" />
          </button>
        </div>
      ),
    },
  ];

  const actionButton = (
    <button className="flex items-center gap-2 text-sm bg-blue-600 text-white rounded-md px-3 py-1.5 hover:bg-blue-700">
      <FiPlus className="h-3.5 w-3.5" />
      View All
    </button>
  );

  return (
    <DataTable
      data={tableData}
      columns={columns}
      title="Pending Verifications"
      description="Staff certifications requiring verification"
      actionButton={actionButton}
    />
  );
};

export default PendingVerifications;
