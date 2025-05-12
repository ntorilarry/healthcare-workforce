import { FiPlus } from "react-icons/fi";
import type { DataTableColumn } from "../../../../components/DataTable";
import DataTable from "../../../../components/DataTable";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface staffItem {
  id: string;
  name: string;
  facility: string;
  role: string;
  status: "Active" | "Inactive";
}

const Staff = () => {
  const tableData: staffItem[] = [
    {
      id: "HW-2023-0042",
      name: "Dr. Kofi Mensah",
      facility: "Korle Bu Teaching Hospital",
      role: "Medical Doctor",
      status: "Active",
    },
    {
      id: "HW-2021-1187",
      name: "Nurse Abena Owusu",
      facility: "Ridge Hospital",
      role: "Registered Nurse",
      status: "Active",
    },
    {
      id: "HW-2020-0563<",
      name: "Dr. Esi Agyemang",
      facility: "Komfo Anokye Teaching Hospital",
      role: "Specialist",
      status: "Active",
    },
    {
      id: "HW-2022-0891",
      name: "Lab Tech. Kwame Boateng",
      facility: "Cape Coast Teaching Hospital",
      role: "Lab Technician",
      status: "Active",
    },
  ];

  const columns: DataTableColumn<staffItem>[] = [
    {
      header: "Id",
      accessor: "id",
    },

    {
      header: "Staff Name",
      accessor: "name",
    },

    {
      header: "Facility",
      accessor: "facility",
      hidden: window.innerWidth < 768,
    },
    {
      header: "Role",
      accessor: "role",
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
  ];

  const actionButton = (
    <div className="flex flex-wrap gap-2">
      <button className="flex items-center gap-2 text-sm border border-black/30 hover:bg-neutral-800 hover:text-white text-black rounded-md px-3 py-1.5">
        <FiPlus className="h-3.5 w-3.5" />
        Export
      </button>
      <Link to="/staff/create" className="flex items-center gap-2 text-sm bg-neutral-800 text-white rounded-md px-3 py-1.5 hover:bg-neutral-900">
        <FiPlus className="h-3.5 w-3.5" />
        Add Staff
      </Link>
    </div>
  );
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);

  const viewProfile = () => {
    navigate("/staff/view");
  };

  const editDetails = () => {
    navigate("/staff/create");
  };
  const transferUser = () => {
    navigate("/staff/profile");
  };
  const deleteUser = () => {
    navigate("/staff/profile");
  };
  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      {" "}
      <DataTable
        data={tableData}
        columns={columns}
        title="Staff List"
        description="Manage and view all healthcare workers"
        headerAction={actionButton}
        actions={[
          { label: "View Profile", onClick: viewProfile },
          { label: "Edit Details", onClick: editDetails },
          { label: "Transfer", onClick: transferUser },
          { label: "Deactivate", onClick: deleteUser },
        ]}
        pagination={{
          currentPage,
          totalPages,
          onPageChange: setCurrentPage,
        }}
      />
    </div>
  );
};

export default Staff;
