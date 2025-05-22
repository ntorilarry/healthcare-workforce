import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  FiChevronLeft,
  FiPrinter,
  FiDownload,
  FiEdit,
  FiAward,
  FiCalendar,
  FiShield,
  FiPhone,
  FiMail,
  FiMapPin,
  FiUser,
  FiFileText,
  FiEye,
  FiLink2,
  FiRefreshCw,
  FiAlertCircle,
} from "react-icons/fi";
import { FaHistory, FaRegBuilding } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const ViewCertificate = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-neutral-200 bg-white px-4 sm:gap-8 lg:px-6">
        <button onClick={handleGoBack} className="flex items-center gap-2 cursor-pointer">
          <FiChevronLeft className="h-4 w-4" />
          <span>Go back</span>
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">View Certification</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            <FiPrinter className="h-4 w-4" />
            Print
          </button>
          <button className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            <FiDownload className="h-4 w-4" />
            Download
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-transparent bg-blue-600 text-white hover:bg-blue-700">
            <FiEdit className="h-4 w-4" />
            Edit
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6">
            {/* Certificate Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <FiAward className="h-8 w-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
                  <h1 className="text-2xl font-bold">Medical License</h1>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Valid
                  </span>
                </div>
                <p className="text-gray-500">
                  Ghana Medical Council • License #GMC-2023-5678
                </p>
              </div>
              <div className="flex flex-col gap-2 md:items-end">
                <div className="flex items-center gap-2">
                  <FiCalendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Expires: May 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiShield className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Verified on May 16, 2023</span>
                </div>
              </div>
            </div>

            {/* Certificate Details and Staff Info */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Certificate Details Card */}
              <div className="md:col-span-2 bg-white rounded-lg  border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold">Certificate Details</h2>
                  <p className="text-sm text-gray-500">
                    Information about this certification
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Certificate Type</p>
                      <p className="font-medium">Medical License</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">
                        Certificate Number
                      </p>
                      <p className="font-medium">GMC-2023-5678</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Issuing Body</p>
                      <p className="font-medium">Ghana Medical Council</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium">Medical Practice</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Issue Date</p>
                      <p className="font-medium">May 15, 2023</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Expiry Date</p>
                      <p className="font-medium">May 15, 2025</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Scope of Practice</p>
                      <p className="font-medium">General Medicine</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Restrictions</p>
                      <p className="font-medium">None</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-1">
                    <p className="text-sm text-gray-500">Notes</p>
                    <p className="text-sm">
                      This license authorizes the holder to practice medicine in
                      Ghana according to the regulations set by the Ghana
                      Medical Council. The license must be renewed before the
                      expiry date to maintain continuous practice authorization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Staff Information Card */}
              <div className="bg-white rounded-lg  border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold">Staff Information</h2>
                  <p className="text-sm text-gray-500">
                    Certificate holder details
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-lg font-medium text-gray-600">
                        KM
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Dr. Kofi Mensah</h3>
                      <p className="text-sm text-gray-500">Medical Doctor</p>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          Staff ID: HW-2023-0042
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <FaRegBuilding className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">
                        Korle Bu Teaching Hospital
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiPhone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">+233 20 123 4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMail className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">kofi.mensah@health.gov.gh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Greater Accra Region</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href="/staff/hw-2023-0042"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md  text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <FiUser className="h-4 w-4" />
                      View Full Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Document */}
            <div className="bg-white rounded-lg  border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Certificate Document</h2>
                <p className="text-sm text-gray-500">
                  Digital copy of the certificate
                </p>
              </div>
              <div className="p-6">
                <div className="overflow-hidden rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between bg-gray-50 px-4 py-2">
                    <div className="flex items-center gap-2">
                      <FiFileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium">
                        medical-license-gmc-2023-5678.pdf
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-2 px-2 py-1 text-sm text-gray-700 hover:text-gray-900">
                        <FiEye className="h-4 w-4" />
                        Preview
                      </button>
                      <button className="flex items-center gap-2 px-2 py-1 text-sm text-gray-700 hover:text-gray-900">
                        <FiDownload className="h-4 w-4" />
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="flex h-[300px] items-center justify-center bg-white p-4">
                    <div className="rounded-lg border border-dashed p-12 text-center">
                      <FiFileText className="mx-auto h-12 w-12 text-gray-300" />
                      <h3 className="mt-2 text-sm font-semibold">
                        Certificate Preview
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        Click Preview to view the certificate document
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs for History and Related Certifications */}
            <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
              <TabList className="flex p-1 space-x-1 bg-gray-100 rounded-lg">
                <Tab
                  className={({ selected }) =>
                    `w-full py-2.5 text-sm leading-5 font-medium rounded-md focus:outline-none ${
                      selected
                        ? "bg-white shadow text-blue-700"
                        : "text-gray-700 hover:bg-white/[0.12] hover:text-blue-600"
                    }`
                  }
                >
                  Certificate History
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `w-full py-2.5 text-sm leading-5 font-medium rounded-md focus:outline-none ${
                      selected
                        ? "bg-white shadow text-blue-700"
                        : "text-gray-700 hover:bg-white/[0.12] hover:text-blue-600"
                    }`
                  }
                >
                  Related Certifications
                </Tab>
              </TabList>

              <TabPanels className="mt-6">
                {/* History Tab */}
                <TabPanel>
                  <div className="bg-white rounded-lg  border border-neutral-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h2 className="text-lg font-semibold">
                        Certificate History
                      </h2>
                      <p className="text-sm text-gray-500">
                        Timeline of actions and changes
                      </p>
                    </div>
                    <div className="p-6">
                      <div className="relative border-l border-gray-200 pl-6">
                        <div className="mb-8 relative">
                          <div className="absolute -left-[25px] flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white">
                            <FiShield className="h-5 w-5 text-green-500" />
                          </div>
                          <div className="pt-1">
                            <time className="mb-1 text-sm font-normal text-gray-500">
                              May 16, 2023
                            </time>
                            <h3 className="text-lg font-semibold">
                              Certificate Verified
                            </h3>
                            <p className="text-base font-normal text-gray-500">
                              Verified by Admin: Sarah Johnson
                            </p>
                            <p className="mt-2 text-sm text-gray-700">
                              Certificate was verified against the Ghana Medical
                              Council database.
                            </p>
                          </div>
                        </div>

                        <div className="mb-8 relative">
                          <div className="absolute -left-[25px] flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white">
                            <FiFileText className="h-5 w-5 text-blue-500" />
                          </div>
                          <div className="pt-1">
                            <time className="mb-1 text-sm font-normal text-gray-500">
                              May 15, 2023
                            </time>
                            <h3 className="text-lg font-semibold">
                              Certificate Uploaded
                            </h3>
                            <p className="text-base font-normal text-gray-500">
                              Uploaded by: Dr. Kofi Mensah
                            </p>
                            <p className="mt-2 text-sm text-gray-700">
                              Digital copy of the certificate was uploaded to
                              the system.
                            </p>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-[25px] flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white">
                            <FiAward className="h-5 w-5 text-blue-500" />
                          </div>
                          <div className="pt-1">
                            <time className="mb-1 text-sm font-normal text-gray-500">
                              May 15, 2023
                            </time>
                            <h3 className="text-lg font-semibold">
                              Certificate Issued
                            </h3>
                            <p className="text-base font-normal text-gray-500">
                              Issued by: Ghana Medical Council
                            </p>
                            <p className="mt-2 text-sm text-gray-700">
                              Medical license was issued to Dr. Kofi Mensah for
                              a period of 2 years.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                {/* Related Certifications Tab */}
                <TabPanel>
                  <div className="bg-white rounded-lg  border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h2 className="text-lg font-semibold">
                        Related Certifications
                      </h2>
                      <p className="text-sm text-gray-500">
                        Other certifications held by Dr. Kofi Mensah
                      </p>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
                          <div className="flex items-center gap-4">
                            <FiAward className="h-8 w-8 text-blue-500" />
                            <div>
                              <h3 className="font-semibold">
                                Specialist Certification - Internal Medicine
                              </h3>
                              <p className="text-sm text-gray-500">
                                Ghana College of Physicians and Surgeons
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Valid
                            </span>
                            <p className="mt-1 text-sm text-gray-500">
                              Expires: Nov 10, 2027
                            </p>
                            <button className="mt-2 flex items-center gap-2 px-2 py-1 text-sm text-gray-700 hover:text-gray-900">
                              <FiLink2 className="h-4 w-4" />
                              View
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
                          <div className="flex items-center gap-4">
                            <FiAward className="h-8 w-8 text-blue-500" />
                            <div>
                              <h3 className="font-semibold">
                                Basic Life Support (BLS) Certification
                              </h3>
                              <p className="text-sm text-gray-500">
                                American Heart Association
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              Expiring Soon
                            </span>
                            <p className="mt-1 text-sm text-gray-500">
                              Expires: June 5, 2023
                            </p>
                            <button className="mt-2 flex items-center gap-2 px-2 py-1 text-sm text-gray-700 hover:text-gray-900">
                              <FiLink2 className="h-4 w-4" />
                              View
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
                          <div className="flex items-center gap-4">
                            <FiAward className="h-8 w-8 text-blue-500" />
                            <div>
                              <h3 className="font-semibold">
                                Advanced Cardiac Life Support (ACLS)
                              </h3>
                              <p className="text-sm text-gray-500">
                                American Heart Association
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Valid
                            </span>
                            <p className="mt-1 text-sm text-gray-500">
                              Expires: Aug 15, 2024
                            </p>
                            <button className="mt-2 flex items-center gap-2 px-2 py-1 text-sm text-gray-700 hover:text-gray-900">
                              <FiLink2 className="h-4 w-4" />
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>

            {/* Action Panel */}
            <div className="bg-white rounded-lg  border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Certificate Actions</h2>
              </div>
              <div className="p-6">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
                  <button className="flex flex-col items-center gap-1 h-auto py-4 px-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    <FiRefreshCw className="h-5 w-5" />
                    <span>Renew</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 h-auto py-4 px-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    <FiShield className="h-5 w-5" />
                    <span>Verify</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 h-auto py-4 px-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    <FiMail className="h-5 w-5" />
                    <span>Notify</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 h-auto py-4 px-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    <FaHistory className="h-5 w-5" />
                    <span>Audit Log</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 h-auto py-4 px-2 border border-gray-300 rounded-md text-red-600 hover:bg-gray-50">
                    <FiAlertCircle className="h-5 w-5" />
                    <span>Flag Issue</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
