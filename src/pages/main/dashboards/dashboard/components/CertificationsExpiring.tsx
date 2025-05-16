"../../../../components/DataTable";

import type { DataTableColumn } from "../../../../../components/DataTable";
import DataTable from "../../../../../components/DataTable";

interface CertificateItem {
  id: string;
  name: string;
  certification: string;
  facility: string;
  expiry: string;
  status: string;
}

const CertificationsExpiring = () => {
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
        <div className="flex justify-end gap-2">
          <button className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
            Notify
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white">
        <DataTable
          data={tableData}
          columns={columns}
          title="Certifications Expiring Soon"
          description="Staff with certifications expiring in the next 30 days"
        />
      </div>
    </div>
  );
};

export default CertificationsExpiring;
