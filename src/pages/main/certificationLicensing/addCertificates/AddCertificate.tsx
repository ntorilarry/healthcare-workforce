import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { LuChevronLeft, LuUpload, LuSearch, LuRefreshCw } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const AddCertificate = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-neutral-200 bg-white px-4 sm:gap-8 lg:px-6">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 cursor-pointer"
        >
          <LuChevronLeft className="h-4 w-4" />
          <span>Go back</span>
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Add Certification</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-neutral-200 bg-white shadow-sm">
            <div className="border-b border-neutral-200 p-6">
              <h2 className="text-xl font-semibold">Certification Details</h2>
              <p className="text-sm text-gray-500">
                Add a new certification or update an existing one
              </p>
            </div>
            <div className="p-6">
              <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
                <TabList className="flex space-x-1 rounded-lg bg-gray-100 p-1">
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded-md py-2 text-sm font-medium leading-5 transition-colors ${
                        selected
                          ? "bg-white shadow text-blue-700"
                          : "text-gray-600 hover:bg-white/[0.12] hover:text-gray-800"
                      }`
                    }
                  >
                    Manual Entry
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded-md py-2 text-sm font-medium leading-5 transition-colors ${
                        selected
                          ? "bg-white shadow text-blue-700"
                          : "text-gray-600 hover:bg-white/[0.12] hover:text-gray-800"
                      }`
                    }
                  >
                    External Verification
                  </Tab>
                </TabList>
                <TabPanels className="mt-6">
                  {/* Manual Entry Tab */}
                  <TabPanel className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="staffSearch"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Staff Member
                        </label>
                        <div className="relative">
                          <LuSearch className="absolute left-2.5 top-3.5 h-4 w-4 text-gray-500" />
                          <input
                            id="staffSearch"
                            type="text"
                            placeholder="Search staff by name or ID"
                            className="mt-1 ps-8 pe-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="certificationType"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Certification Type
                        </label>
                        <select
                          id="certificationType"
                           className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                        >
                          <option value="">Select certification type</option>
                          <option value="medical">Medical License</option>
                          <option value="nursing">Nursing License</option>
                          <option value="specialist">
                            Specialist Certification
                          </option>
                          <option value="bls">Basic Life Support</option>
                          <option value="acls">
                            Advanced Cardiac Life Support
                          </option>
                          <option value="pharmacy">Pharmacy License</option>
                          <option value="laboratory">Laboratory License</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="certificationNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Certification Number
                        </label>
                        <input
                          id="certificationNumber"
                          type="text"
                          placeholder="Enter certification number"
                           className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="issuingBody"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Issuing Body
                        </label>
                        <select
                          id="issuingBody"
                           className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                        >
                          <option value="">Select issuing body</option>
                          <option value="gmc">Ghana Medical Council</option>
                          <option value="nmc">
                            Nursing and Midwifery Council
                          </option>
                          <option value="pc">Pharmacy Council</option>
                          <option value="ahpc">
                            Allied Health Professions Council
                          </option>
                          <option value="gcps">
                            Ghana College of Physicians and Surgeons
                          </option>
                          <option value="aha">
                            American Heart Association
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="issueDate"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Issue Date
                        </label>
                        <input
                          id="issueDate"
                          type="date"
                           className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="expiryDate"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Expiry Date
                        </label>
                        <input
                          id="expiryDate"
                          type="date"
                           className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description/Notes
                      </label>
                      <textarea
                        id="description"
                        rows={3}
                        placeholder="Enter any additional details about the certification"
                         className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                      />
                    </div>

                    <div className="rounded-lg border border-dashed border-gray-300 p-6">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                          <LuUpload className="h-6 w-6 text-gray-500" />
                        </div>
                        <h3 className="mt-2 text-sm font-semibold">
                          Upload Certificate
                        </h3>
                        <p className="mt-1 text-xs text-gray-500">
                          Upload a scanned copy of the certificate (PDF, JPG,
                          PNG)
                        </p>
                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                            Select File
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="verified"
                        name="verified"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="verified"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Mark as verified
                      </label>
                    </div>
                  </TabPanel>

                  {/* External Verification Tab */}
                  <TabPanel className="space-y-6">
                    <div className="rounded-lg border border-gray-300 p-6">
                      <h3 className="text-lg font-semibold">
                        Verify with External Service
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Connect to external certification databases to verify
                        the authenticity of the certification.
                      </p>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="externalService"
                            className="block text-sm font-medium text-gray-700"
                          >
                            External Service
                          </label>
                          <select
                            id="externalService"
                             className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select service</option>
                            <option value="gmc">
                              Ghana Medical Council Database
                            </option>
                            <option value="nmc">
                              Nursing and Midwifery Council Database
                            </option>
                            <option value="pc">
                              Pharmacy Council Database
                            </option>
                            <option value="ahpc">
                              Allied Health Professions Council Database
                            </option>
                            <option value="gcps">
                              Ghana College of Physicians and Surgeons Database
                            </option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="apiKey"
                            className="block text-sm font-medium text-gray-700"
                          >
                            API Key (if required)
                          </label>
                          <input
                            id="apiKey"
                            type="password"
                            placeholder="Enter API key"
                             className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                      </div>

                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="licenseNumber"
                            className="block text-sm font-medium text-gray-700"
                          >
                            License/Certificate Number
                          </label>
                          <input
                            id="licenseNumber"
                            type="text"
                            placeholder="Enter license number to verify"
                             className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="holderName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Certificate Holder Name
                          </label>
                          <input
                            id="holderName"
                            type="text"
                            placeholder="Enter certificate holder's name"
                             className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                      </div>

                      <div className="mt-6">
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          <LuRefreshCw className="mr-2 h-4 w-4" />
                          Verify with External Service
                        </button>
                      </div>

                      <div className="mt-6 rounded-lg bg-gray-50 p-4">
                        <h4 className="font-medium">Verification Results</h4>
                        <p className="mt-1 text-sm text-gray-500">
                          Connect to an external service to see verification
                          results here.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg border border-dashed border-gray-300 p-6">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                          <LuUpload className="h-6 w-6 text-gray-500" />
                        </div>
                        <h3 className="mt-2 text-sm font-semibold">
                          Upload Certificate
                        </h3>
                        <p className="mt-1 text-xs text-gray-500">
                          Even when verifying externally, you can upload a
                          scanned copy for records
                        </p>
                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                            Select File
                          </button>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </div>
            <div className="flex justify-between border-t border-neutral-200 p-6">
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save Certification
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
