import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { DataTableColumn } from "../../../components/DataTable";
import DataTable from "../../../components/DataTable";
import { FaAward } from "react-icons/fa";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { BiExport } from "react-icons/bi";

interface certificationItem {
  id: string;
  name: string;
  certificationType: string;
  issuingBody: string;
  issueDate: string;
  expiryDate: string;
  status: "Active" | "Expiring Soon";
}

const Certification = () => {
  const tableData: certificationItem[] = [
    {
      id: "1",
      name: "Dr. Kofi Mensah",
      certificationType: "Medical License",
      issuingBody: "Ghana Medical Council",
      issueDate: "May 15, 2020",
      expiryDate: "May 15, 2025",
      status: "Active",
    },
    {
      id: "2",
      name: "Nurse Abena Owusu",
      certificationType: "Nursing License",
      issuingBody: "Nursing and Midwifery Council",
      issueDate: "May 18, 2020",
      expiryDate: "May 18, 2025",
      status: "Active",
    },
    {
      id: "3",
      name: "Dr. Esi Agyemang",
      certificationType: "Specialist Certification",
      issuingBody: "Ghana College of Physicians",
      issueDate: "May 22, 2020",
      expiryDate: "May 22, 2025",
      status: "Active",
    },
    {
      id: "4",
      name: "Lab Tech. Kwame Boateng",
      certificationType: "Lab Technician License",
      issuingBody: "Allied Health Professions Council",
      issueDate: "May 30, 2020",
      expiryDate: "May 30, 2025",
      status: "Expiring Soon",
    },
    {
      id: "5",
      name: "Pharmacist John Ansah",
      certificationType: "Pharmacy License",
      issuingBody: "Pharmacy Council",
      issueDate: "Jan 15, 2023",
      expiryDate: "Jan 15, 2025",
      status: "Expiring Soon",
    },
  ];

  const columns: DataTableColumn<certificationItem>[] = [
    {
      header: "Staff Name",
      accessor: "name",
    },

    {
      header: "Certification Type",
      accessor: "certificationType",
    },
    {
      header: "Issuing Body",
      accessor: "issuingBody",
    },
    {
      header: "Issuing Date",
      accessor: "issueDate",
    },
    {
      header: "Expiry Date",
      accessor: "expiryDate",
    },
    {
      header: "Status",
      accessor: "status",
      render: (item) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            item.status === "Active"
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
        <div className="flex ">
          <button className="rounded-md px-2 py-1 text-sm text-blue-500 hover:bg-blue-100">
            View
          </button>
        </div>
      ),
    },
  ];

  const actionButton = (
    <div className="flex flex-wrap gap-2">
      <button className="flex items-center gap-2 text-sm border border-black/30 hover:bg-neutral-800 hover:text-white text-black rounded-md px-3 py-1.5">
        <BiExport className="h-3.5 w-3.5" />
        Export
      </button>
      <Link
        to="/staff/create"
        className="flex items-center gap-2 text-sm bg-neutral-800 text-white rounded-md px-3 py-1.5 hover:bg-neutral-900"
      >
        <FiPlus className="h-3.5 w-3.5" />
        Add Certifications
      </Link>
    </div>
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);

  return (
    <div>
      <div className="rounded-lg border border-gray-200 bg-white">
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
              All
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
              Medical
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
              Security
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
              Sanitation
            </Tab>
          </TabList>
          <TabPanels className="mt-0">
            <TabPanel>
              <DataTable
                data={tableData}
                columns={columns}
                title="Certification Overview"
                description="View and manage all certifications"
                headerAction={actionButton}
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
      <div className="grid gap-4 md:grid-cols-3 pt-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Valid Certifications</h3>
            <FaAward className="h-4 w-4 text-green-500" />
          </div>
          <div className="py-4 pt-0">
            <div className="text-2xl font-bold">2,845</div>
            <p className="text-xs text-gray-500">95% of total certifications</p>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Expiring in 90 Days</h3>
            <FaAward className="h-4 w-4 text-amber-500" />
          </div>
          <div className="py-4 pt-0">
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-gray-500">4% of total certifications</p>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Expired</h3>
            <FaAward className="h-4 w-4 text-red-500" />
          </div>
          <div className="py-4 pt-0">
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-gray-500">1% of total certifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
