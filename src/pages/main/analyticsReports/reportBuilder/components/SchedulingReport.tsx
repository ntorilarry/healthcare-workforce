import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Switch } from "@headlessui/react";
import { useState } from "react";
import { FiCalendar, FiClock, FiEdit } from "react-icons/fi";

const SchedulingReport = () => {
    const [scheduleTemplate, setScheduleTemplate] = useState("");
    const [frequency, setFrequency] = useState("");
    const [autoExport, setAutoExport] = useState(false);
  return (
    <div>
      {" "}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 bg-white ">
          <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Schedule New Report
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Set up automated report generation
            </p>
          </div>
          <div className="space-y-4 p-4 sm:p-6">
            <div className="space-y-2">
              <label
                htmlFor="scheduleTemplate"
                className="block text-sm font-medium text-gray-700"
              >
                Report Template
              </label>
              <Listbox value={scheduleTemplate} onChange={setScheduleTemplate}>
                <div className="relative">
                  <ListboxButton className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                    <span className="block truncate">
                      {scheduleTemplate || "Select template"}
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
                  <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <ListboxOption
                      value="monthly-workforce"
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                    >
                      Monthly Workforce Report
                    </ListboxOption>
                    <ListboxOption
                      value="certification-expiry"
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                    >
                      Certification Expiry Report
                    </ListboxOption>
                    <ListboxOption
                      value="regional-performance"
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                    >
                      Regional Performance Dashboard
                    </ListboxOption>
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="frequency"
                className="block text-sm font-medium text-gray-700"
              >
                Frequency
              </label>
              <Listbox value={frequency} onChange={setFrequency}>
                <div className="relative">
                  <ListboxButton className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                    <span className="block truncate">
                      {frequency || "Select frequency"}
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
                  <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <ListboxOption
                      value="daily"
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                    >
                      Daily
                    </ListboxOption>
                    <ListboxOption
                      value="weekly"
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                    >
                      Weekly
                    </ListboxOption>
                    <ListboxOption
                      value="monthly"
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                    >
                      Monthly
                    </ListboxOption>
                    <ListboxOption
                      value="quarterly"
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                    >
                      Quarterly
                    </ListboxOption>
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="scheduleTime"
                className="block text-sm font-medium text-gray-700"
              >
                Time
              </label>
              <input
                type="time"
                id="scheduleTime"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                defaultValue="09:00"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="recipients"
                className="block text-sm font-medium text-gray-700"
              >
                Email Recipients
              </label>
              <textarea
                id="recipients"
                rows={3}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter email addresses separated by commas"
              />
            </div>

            <div className="flex items-center">
              <Switch
                checked={autoExport}
                onChange={setAutoExport}
                className={`${
                  autoExport ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                <span
                  className={`${
                    autoExport ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <label
                htmlFor="autoExport"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                Auto-export to PDF
              </label>
            </div>

            <button className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <FiCalendar className="mr-2 h-4 w-4" />
              Schedule Report
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Scheduled Reports
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Manage your scheduled reports
            </p>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-4">
              <div className="rounded-lg border border-neutral-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Monthly Workforce Report</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <FiClock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        Every 1st of month at 9:00 AM
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Active
                    </span>
                    <button className="rounded-md p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiEdit className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">
                      Weekly Certification Check
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <FiClock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        Every Monday at 8:00 AM
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Active
                    </span>
                    <button className="rounded-md p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiEdit className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">
                      Quarterly Performance Review
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <FiClock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        Every quarter on 1st at 10:00 AM
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      Paused
                    </span>
                    <button className="rounded-md p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiEdit className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulingReport;
