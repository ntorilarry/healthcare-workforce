import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import type { DataTableColumn } from "../../../../../components/DataTable";
import DataTable from "../../../../../components/DataTable";

interface certificationItem {
  id: string;
  name: string;
  currentFacility: string;
  destinationFacility: string;
  role: string;
  requestedDate: string;
  transferDate: string;
  status: "Pending" | "Approved";
}

const TransferDatatable = () => {
  const tableData: certificationItem[] = [
    {
      id: "HW-2023-0042",
      name: "Dr. Kofi Mensah",
      currentFacility: "Korle Bu Teaching Hospital",
      destinationFacility: "Ridge Hospital",
      role: "Medical Officer",
      requestedDate: "May 15, 2020",
      transferDate: "June 1, 2025",
      status: "Pending",
    },
    {
      id: "HW-2021-1187",
      name: "Nurse Abena Owusu",
      currentFacility: "Ridge Hospital",
      destinationFacility: "37 Military Hospital",
      role: "Staff Nurse",
      requestedDate: "May 5, 2025",
      transferDate: "June 15, 2025",
      status: "Pending",
    },
    {
      id: "HW-2022-0891",
      name: "Lab Tech. Kwame Boateng",
      currentFacility: "Cape Coast Teaching Hospital",
      destinationFacility: "Komfo Anokye Teaching Hospital",
      role: "Laboratory Technician",
      requestedDate: "May 10, 2025",
      transferDate: "July 1, 2025",
      status: "Pending",
    },
  ];

  const columns: DataTableColumn<certificationItem>[] = [
    {
      header: "Staff",
      accessor: "name",
      render: (item) => (
        <div className="flex items-center gap-3">
          <img
            className="h-8 w-8 rounded-full bg-gray-100"
            src={`https://ui-avatars.com/api/?name=${item.name}&background=random&size=40`}
            alt=""
          />
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-xs text-gray-500">ID: {item.id}</p>
          </div>
        </div>
      ),
    },

    {
      header: "Current Facility",
      accessor: "currentFacility",
    },
    {
      header: "Destination Facility",
      accessor: "destinationFacility",
    },
    {
      header: "Role",
      accessor: "role",
    },
    {
      header: "Requested Date",
      accessor: "requestedDate",
    },
    {
      header: "Transfer Date",
      accessor: "transferDate",
    },
    {
      header: "Status",
      accessor: "status",
      render: (item) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            item.status === "Approved"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
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
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-gray-50">
            View
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
            Approve
          </button>
        </div>
      ),
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);

  return (
    <div>
      <div className="rounded-lg border border-neutral-200 bg-white">
        {" "}
        <TabGroup defaultIndex={0}>
          <TabList className="flex space-x-1 rounded-lg bg-gray-100 p-1 mb-4">
            <Tab
              className={({ selected }) =>
                `w-full py-2 text-sm font-medium leading-5 rounded-md ${
                  selected
                    ? "bg-white shadow text-blue-700"
                    : "text-gray-600 hover:bg-white/[0.12] hover:text-gray-700"
                }`
              }
            >
              Pending
            </Tab>
            <Tab
              className={({ selected }) =>
                `w-full py-2 text-sm font-medium leading-5 rounded-md ${
                  selected
                    ? "bg-white shadow text-blue-700"
                    : "text-gray-600 hover:bg-white/[0.12] hover:text-gray-700"
                }`
              }
            >
              Approved
            </Tab>
            <Tab
              className={({ selected }) =>
                `w-full py-2 text-sm font-medium leading-5 rounded-md ${
                  selected
                    ? "bg-white shadow text-blue-700"
                    : "text-gray-600 hover:bg-white/[0.12] hover:text-gray-700"
                }`
              }
            >
              Rejected
            </Tab>
            <Tab
              className={({ selected }) =>
                `w-full py-2 text-sm font-medium leading-5 rounded-md ${
                  selected
                    ? "bg-white shadow text-blue-700"
                    : "text-gray-600 hover:bg-white/[0.12] hover:text-gray-700"
                }`
              }
            >
              Transfer History
            </Tab>
          </TabList>
          <TabPanels className="mt-0">
            <TabPanel>
              <DataTable
                data={tableData}
                columns={columns}
                title="Transfer Requests"
                description="View and manage staff transfer requests"
                pagination={{
                  currentPage,
                  totalPages,
                  onPageChange: setCurrentPage,
                }}
              />
            </TabPanel>
            {/* Add other Tab.Panels for different tabs if needed */}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default TransferDatatable;
