import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import type { DataTableColumn } from "../../../../../components/DataTable";
import DataTable from "../../../../../components/DataTable";

interface disciplinaryItem {
  caseId: string;
  name: string;
  actionType: string;
  role: string;
  reason: string;
  date: string;
  status: string;
  evidence: string;
}

const DisplinaryDataTable = () => {
  const tableData: disciplinaryItem[] = [
    {
      caseId: "DA-2025-001",
      name: "Dr. Kofi Mensah",
      role: "Medical Officer",
      actionType: "Written Warning",
      reason: "Tardiness",
      date: "May 15, 2025",
      status: "Active",
      evidence: "3 files",
    },
    {
      caseId: "DA-2025-002",
      name: "Nurse Abena Owusu",
      role: "Staff Nurse",
      actionType: "Suspension",
      reason: "Policy Violation",
      date: "May 5, 2025",
      status: "Under Appeal",
      evidence: "5 files",
    },
    {
      caseId: "DA-2025-003",
      name: "Lab Tech. Kwame Boateng",
      role: "Laboratory Technician",
      actionType: "Termination",
      reason: "Misconduct",
      date: "April 28, 2025",
      status: "Completed",
      evidence: "8 files",
    },
    {
      caseId: "DA-2025-004",
      name: "Dr. Esi Agyemang",
      role: "Specialist",
      actionType: "Verbal Warning",
      reason: "Communication Issues",
      date: "April 20, 2025",
      status: "Active",
      evidence: "1 file",
    },
  ];

  const columns: DataTableColumn<disciplinaryItem>[] = [
    {
      header: "Case ID",
      accessor: "caseId",
    },
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
            <p className="text-xs text-gray-500">{item.role}</p>
          </div>
        </div>
      ),
    },

    {
      header: "Action Type",
      accessor: "actionType",
      render: (item) => {
        let actionTypeClass = "";
        switch (item.actionType) {
          case "Written Warning":
            actionTypeClass = "bg-amber-100 text-amber-800";
            break;
          case "Suspension":
            actionTypeClass = "bg-orange-100 text-orange-800";
            break;
          case "Termination":
            actionTypeClass = "bg-red-100 text-red-800";
            break;
          case "Verbal Warning":
            actionTypeClass = "bg-amber-100 text-amber-800";
            break;
          default:
            actionTypeClass = "bg-gray-100 text-gray-800";
        }

        return (
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${actionTypeClass}`}
          >
            {item.actionType}
          </span>
        );
      },
    },

    {
      header: "Reason",
      accessor: "reason",
    },
    {
      header: "Date",
      accessor: "date",
    },
    {
      header: "Status",
      accessor: "status",
      render: (item) => {
        let statusClass = "";
        switch (item.status) {
          case "Active":
            statusClass = "bg-green-100 text-green-800";
            break;
          case "Under Appeal":
            statusClass = "bg-blue-100 text-blue-800";
            break;
          case "Completed":
            statusClass = "bg-gray-100 text-gray-800";
            break;
          default:
            statusClass = "bg-neutral-100 text-neutral-800";
        }

        return (
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}`}
          >
            {item.status}
          </span>
        );
      },
    },
    {
      header: "Evidence",
      accessor: "evidence",
    },

    {
      header: "Actions",
      accessor: "caseId",
      render: () => (
        <div className="flex ">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-gray-50">
            View
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
              All Actions
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
              Warnings
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
              Suspensions
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
              Terminations
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
              Appeals
            </Tab>
          </TabList>
          <TabPanels className="mt-0">
            <TabPanel>
              <DataTable
                data={tableData}
                columns={columns}
                title="Promotion Requests"
                description="View and manage staff promotion requests"
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

export default DisplinaryDataTable;
