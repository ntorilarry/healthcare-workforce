import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const ReportConfiguration = () => {
  const [reportType, setReportType] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [facility, setFacility] = useState("");
  const [department, setDepartment] = useState("");
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white ">
        <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Report Configuration
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Configure your report settings
          </p>
        </div>
        <div className="space-y-4 p-4 sm:p-6">
          <div className="space-y-2">
            <label
              htmlFor="reportName"
              className="block text-sm font-medium text-gray-700"
            >
              Report Name
            </label>
            <input
              type="text"
              id="reportName"
              className="block w-full p-2 rounded-md border border-gray-300  focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter report name"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="reportDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="reportDescription"
              rows={3}
              className="block w-full p-2 rounded-md border border-gray-300  focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter report description"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="reportType"
              className="block text-sm font-medium text-gray-700"
            >
              Report Type
            </label>
            <Listbox value={reportType} onChange={setReportType}>
              <div className="relative">
                <ListboxButton className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left  focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                  <span className="block truncate">
                    {reportType || "Select report type"}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </ListboxButton>
                <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <ListboxOption
                    value="workforce"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Workforce Report
                  </ListboxOption>
                  <ListboxOption
                    value="certification"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Certification Report
                  </ListboxOption>
                  <ListboxOption
                    value="performance"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Performance Report
                  </ListboxOption>
                  <ListboxOption
                    value="financial"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Financial Report
                  </ListboxOption>
                  <ListboxOption
                    value="custom"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Custom Report
                  </ListboxOption>
                </ListboxOptions>
              </div>
            </Listbox>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="dateRange"
              className="block text-sm font-medium text-gray-700"
            >
              Date Range
            </label>
            <Listbox value={dateRange} onChange={setDateRange}>
              <div className="relative">
                <ListboxButton className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left  focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                  <span className="block truncate">
                    {dateRange || "Select date range"}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </ListboxButton>
                <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <ListboxOption
                    value="last-7-days"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Last 7 days
                  </ListboxOption>
                  <ListboxOption
                    value="last-30-days"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Last 30 days
                  </ListboxOption>
                  <ListboxOption
                    value="last-90-days"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Last 90 days
                  </ListboxOption>
                  <ListboxOption
                    value="last-year"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Last year
                  </ListboxOption>
                  <ListboxOption
                    value="custom"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Custom range
                  </ListboxOption>
                </ListboxOptions>
              </div>
            </Listbox>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="facility"
              className="block text-sm font-medium text-gray-700"
            >
              Facility Filter
            </label>
            <Listbox value={facility} onChange={setFacility}>
              <div className="relative">
                <ListboxButton className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left  focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                  <span className="block truncate">
                    {facility || "Select facilities"}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </ListboxButton>
                <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <ListboxOption
                    value="all"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    All Facilities
                  </ListboxOption>
                  <ListboxOption
                    value="korle-bu"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Korle Bu Teaching Hospital
                  </ListboxOption>
                  <ListboxOption
                    value="ridge"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Ridge Hospital
                  </ListboxOption>
                  <ListboxOption
                    value="37-military"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    37 Military Hospital
                  </ListboxOption>
                  <ListboxOption
                    value="komfo-anokye"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Komfo Anokye Teaching Hospital
                  </ListboxOption>
                </ListboxOptions>
              </div>
            </Listbox>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department Filter
            </label>
            <Listbox value={department} onChange={setDepartment}>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left  focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                  <span className="block truncate">
                    {department || "Select departments"}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <Listbox.Option
                    value="all"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    All Departments
                  </Listbox.Option>
                  <Listbox.Option
                    value="internal-medicine"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Internal Medicine
                  </Listbox.Option>
                  <Listbox.Option
                    value="surgery"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Surgery
                  </Listbox.Option>
                  <Listbox.Option
                    value="pediatrics"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Pediatrics
                  </Listbox.Option>
                  <Listbox.Option
                    value="emergency"
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    Emergency
                  </Listbox.Option>
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportConfiguration;
