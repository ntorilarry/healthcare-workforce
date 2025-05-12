import { FiPlus } from "react-icons/fi";
import type { DataTableColumn } from "../../../components/DataTableBody";
import DataTable from "../../../components/DataTableBody";


interface CertificateItem {
  id: string;
  name: string;
  certification: string;
  facility: string;
  expiry: string;
  status: string;
}

const Staff = () => {
  const tableData: CertificateItem[] = [
    {
      id: "1",
      name: "Dr. Michael Brown",
      certification: "Medical License",
      facility: "Central Hospital",
      expiry: "May 15, 2025",
      status: "Expiring Soon",
    },
    {
      id: "2",
      name: "Dr. Michael Brown",
      certification: "Medical License",
      facility: "Central Hospital",
      expiry: "May 15, 2025",
      status: "Expiring Soon",
    },
    {
      id: "3",
      name: "Dr. Michael Brown",
      certification: "Medical License",
      facility: "Central Hospital",
      expiry: "May 15, 2025",
      status: "Expiring Soon",
    },
    {
      id: "3",
      name: "Dr. Michael Brown",
      certification: "Medical License",
      facility: "Central Hospital",
      expiry: "May 15, 2025",
      status: "Expiring Soon",
    },
  ];

  const columns: DataTableColumn<CertificateItem>[] = [
    {
      header: "Staff Name",
      accessor: "name",
    },
    {
      header: "Certificate Type",
      accessor: "certification",
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
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
          {item.status}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: "id",
      render: () => (
        <div className="flex ">
          <button className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
            Notify
          </button>
        </div>
      ),
    },
  ];

    const actionButton = (
      <button className="flex items-center gap-2 text-sm bg-neutral-800 text-white rounded-md px-3 py-1.5 hover:bg-neutral-900">
        <FiPlus className="h-3.5 w-3.5" />
      Add Staff
      </button>
    );

  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      {" "}
      <DataTable
        data={tableData}
        columns={columns}
        title="Staff List"
        description="Manage and view all healthcare workers"
        actionButton={actionButton}
      />
    </div>
  );
};

export default Staff;
