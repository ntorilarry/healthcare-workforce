import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import DataTable, {
  type DataTableColumn,
} from "../../../../../components/DataTable";
import { LuMail } from "react-icons/lu";

interface certificationItem {
  id: string;
  name: string;
  certification: string;
  facility: string;
  expiryDate: string;
  notifications: string;
}

const ExpiryTable = () => {
  const [selectedTab, setSelectedTab] = useState("30days");

  const tabs = [
    { id: "30days", label: "30 Days" },
    { id: "60days", label: "60 Days" },
    { id: "90days", label: "90 Days" },
    { id: "expired", label: "Expired" },
    { id: "all", label: "All" },
  ];

  const tableData: certificationItem[] = [
    {
      id: "1",
      name: "Dr. Kofi Mensah",
      certification: "Medical License",
      facility: "Korle Bu Teaching Hospital",
      expiryDate: "May 15, 2025",
      notifications: "Sent",
    },
  ];

  const columns: DataTableColumn<certificationItem>[] = [
    {
      header: "Staff Name",
      accessor: "name",
    },

    {
      header: "Certification",
      accessor: "certification",
    },
    {
      header: "Facility",
      accessor: "facility",
    },

    {
      header: "Expiry Date",
      accessor: "expiryDate",
    },
    {
      header: "Notifications",
      accessor: "notifications",
      render: (item) => (
        <div className="flex items-center gap-1">
          <LuMail className="h-4 w-4 text-green-500" />
          <span className="text-xs">{item.notifications}</span>
        </div>
      ),
    },
    {
      header: "Actions",
      accessor: "id",
      render: () => (
        <div className="flex justify-end gap-2">
          <button className="inline-flex h-8 items-center justify-center rounded-md border border-neutral-200 bg-white px-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
            Remind
          </button>
          <button className="inline-flex h-8 items-center justify-center rounded-md bg-blue-600 px-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
            Renew
          </button>
        </div>
      ),
    },
  ];

  //   const actionButton = (
  //     <div className="flex flex-wrap gap-2">
  //       <button className="flex items-center gap-2 text-sm border border-black/30 hover:bg-neutral-800 hover:text-white text-black rounded-md px-3 py-1.5">
  //         <BiExport className="h-3.5 w-3.5" />
  //         Export
  //       </button>
  //       <Link
  //         to="/certification-&-licensing/add-certificates"
  //         className="flex items-center gap-2 text-sm bg-neutral-800 text-white rounded-md px-3 py-1.5 hover:bg-neutral-900"
  //       >
  //         <FiPlus className="h-3.5 w-3.5" />
  //         Add Certifications
  //       </Link>
  //     </div>
  //   );

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  return (
    <div>
      <div className="space-y-4 p-6">
        {/* Tabs */}
        <TabGroup
          selectedIndex={tabs.findIndex((tab) => tab.id === selectedTab)}
          onChange={(index) => setSelectedTab(tabs[index].id)}
        >
          <TabList className="flex space-x-2 overflow-x-auto border-b border-neutral-200">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                className={({ selected }) =>
                  `whitespace-nowrap border-b-2 px-4 py-2 text-sm font-medium focus:outline-none ${
                    selected
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`
                }
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-4">
            <TabPanel>
              <DataTable
                data={tableData}
                columns={columns}
                title="Certification Expiry Alerts"
                description="   Monitor and manage expiring certifications"
                pagination={{
                  currentPage,
                  totalPages,
                  onPageChange: setCurrentPage,
                }}
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default ExpiryTable;
