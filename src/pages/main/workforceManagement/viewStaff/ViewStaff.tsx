import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  FaChevronLeft,
  FaDownload,
  FaEdit,
  FaFileAlt,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaPlus,
  FaBuilding,
  FaMapMarkerAlt,
  FaAward,
  FaClock,
  FaExclamationCircle,
} from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ViewStaff = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("employment");

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
          <FaChevronLeft className="h-4 w-4" />
          <span>Go back</span>
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">View Staff</h1>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-md border border-neutral-400 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50">
            <FaDownload className="h-4 w-4" />
            Export Profile
          </button>
          <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
            <FaEdit className="h-4 w-4" />
            Edit Profile
          </button>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-6">
          {/* Profile Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://ui-avatars.com/api/?name=Kofi+Mensah&background=random&size=40"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Dr. Kofi Mensah</h1>
              <div className="flex flex-wrap items-center gap-2 text-gray-500 mt-1">
                <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                  Medical Doctor
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <FaBuilding className="h-4 w-4" />
                  Korle Bu Teaching Hospital
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <FaMapMarkerAlt className="h-4 w-4" />
                  Greater Accra Region
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <FaUser className="h-4 w-4" />
                  ID: HW-2023-0042
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                Active
              </span>
              <p className="text-sm text-gray-500">Joined: January 15, 2023</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="rounded-lg border border-neutral-200 bg-white">
            <div className="border-b border-neutral-200 p-4">
              <h2 className="text-lg font-semibold">Contact Information</h2>
            </div>
            <div className="p-4">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex items-center gap-3">
                  <FaPhone className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-gray-500">+233 20 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-gray-500">
                      kofi.mensah@health.gov.gh
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-gray-500">
                      123 Health Avenue, Accra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs for different sections */}
          <TabGroup
            selectedIndex={[
              "employment",
              "certifications",
              "pension",
              "documents",
            ].indexOf(selectedTab)}
            onChange={(index) =>
              setSelectedTab(
                ["employment", "certifications", "pension", "documents"][index]
              )
            }
          >
            <TabList className="flex space-x-1 rounded-lg bg-gray-100 p-1">
              {["Employment", "Certifications", "Pension", "Documents"].map(
                (tab) => (
                  <Tab
                    key={tab}
                    className={({ selected }) =>
                      `w-full rounded-md py-2 text-sm font-medium leading-5 transition-colors ${
                        selected
                          ? "bg-white shadow text-blue-700"
                          : "text-gray-500 hover:bg-white/[0.12] hover:text-gray-700"
                      }`
                    }
                  >
                    {tab}
                  </Tab>
                )
              )}
            </TabList>

            <TabPanels className="mt-6">
              {/* Employment History Tab */}
              <TabPanel>
                <div className="rounded-lg border border-neutral-200 bg-white">
                  <div className="border-b border-neutral-200 p-4">
                    <h2 className="text-lg font-semibold">
                      Employment History
                    </h2>
                    <p className="text-sm text-gray-500">
                      Timeline of positions and roles
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="relative border-l border-neutral-200 pl-6">
                      <div className="mb-10 relative">
                        <div className="absolute -left-[40px] flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white">
                          <FaBuilding className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="pt-1">
                          <time className="mb-1 text-sm font-normal text-gray-500">
                            January 2023 - Present
                          </time>
                          <h3 className="text-lg font-semibold">
                            Senior Medical Officer
                          </h3>
                          <p className="text-base font-normal text-gray-500">
                            Korle Bu Teaching Hospital
                          </p>
                          <p className="mt-2 text-sm text-gray-700">
                            Responsible for patient care in the Internal
                            Medicine department, supervising junior doctors, and
                            participating in medical research.
                          </p>
                        </div>
                      </div>
                      <div className="mb-10 relative">
                        <div className="absolute -left-[40px] flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white">
                          <FaBuilding className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="pt-1">
                          <time className="mb-1 text-sm font-normal text-gray-500">
                            March 2020 - December 2022
                          </time>
                          <h3 className="text-lg font-semibold">
                            Medical Officer
                          </h3>
                          <p className="text-base font-normal text-gray-500">
                            Ridge Hospital
                          </p>
                          <p className="mt-2 text-sm text-gray-700">
                            Provided medical care in the Emergency Department,
                            conducted patient consultations, and participated in
                            hospital committees.
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[40px] flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white">
                          <FaBuilding className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="pt-1">
                          <time className="mb-1 text-sm font-normal text-gray-500">
                            January 2018 - February 2020
                          </time>
                          <h3 className="text-lg font-semibold">
                            House Officer
                          </h3>
                          <p className="text-base font-normal text-gray-500">
                            37 Military Hospital
                          </p>
                          <p className="mt-2 text-sm text-gray-700">
                            Completed rotations in Internal Medicine, Surgery,
                            Pediatrics, and Obstetrics & Gynecology.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* Certifications Tab */}
              <TabPanel>
                <div className="rounded-lg border border-neutral-200 bg-white">
                  <div className="border-b border-neutral-200 p-4">
                    <h2 className="text-lg font-semibold">
                      Certifications & Licenses
                    </h2>
                    <p className="text-sm text-gray-500">
                      Professional qualifications and credentials
                    </p>
                  </div>
                  <div className="p-4 space-y-6">
                    <div className="rounded-lg border border-neutral-200 p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">Medical License</h3>
                          <p className="text-sm text-gray-500">
                            Ghana Medical Council
                          </p>
                        </div>
                        <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                          Valid
                        </span>
                      </div>
                      <div className="mt-4 grid gap-2 sm:grid-cols-3">
                        <div>
                          <p className="text-xs text-gray-500">
                            License Number
                          </p>
                          <p className="text-sm">GMC-2023-5678</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Issue Date</p>
                          <p className="text-sm">May 15, 2023</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Expiry Date</p>
                          <p className="text-sm">May 15, 2025</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <button className="flex items-center gap-2 rounded-md border border-neutral-400 px-3 py-1 text-sm font-medium transition-colors hover:bg-gray-50">
                          <FaFileAlt className="h-4 w-4" />
                          View Certificate
                        </button>
                        <button className="flex items-center gap-2 rounded-md border border-neutral-400 px-3 py-1 text-sm font-medium transition-colors hover:bg-gray-50">
                          <FaAward className="h-4 w-4" />
                          Verify
                        </button>
                      </div>
                    </div>

                    <div className="rounded-lg  border border-neutral-200 p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">
                            Specialist Certification - Internal Medicine
                          </h3>
                          <p className="text-sm text-gray-500">
                            Ghana College of Physicians and Surgeons
                          </p>
                        </div>
                        <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                          Valid
                        </span>
                      </div>
                      <div className="mt-4 grid gap-2 sm:grid-cols-3">
                        <div>
                          <p className="text-xs text-gray-500">
                            Certificate Number
                          </p>
                          <p className="text-sm">GCPS-IM-2022-1234</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Issue Date</p>
                          <p className="text-sm">November 10, 2022</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Expiry Date</p>
                          <p className="text-sm">November 10, 2027</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <button className="flex items-center gap-2 rounded-md border border-neutral-400 px-3 py-1 text-sm font-medium transition-colors hover:bg-gray-50">
                          <FaFileAlt className="h-4 w-4" />
                          View Certificate
                        </button>
                        <button className="flex items-center gap-2 rounded-md border border-neutral-400 px-3 py-1 text-sm font-medium transition-colors hover:bg-gray-50">
                          <FaAward className="h-4 w-4" />
                          Verify
                        </button>
                      </div>
                    </div>

                    <div className="rounded-lg border border-neutral-200 p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">
                            Basic Life Support (BLS) Certification
                          </h3>
                          <p className="text-sm text-gray-500">
                            American Heart Association
                          </p>
                        </div>
                        <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                          Expiring Soon
                        </span>
                      </div>
                      <div className="mt-4 grid gap-2 sm:grid-cols-3">
                        <div>
                          <p className="text-xs text-gray-500">
                            Certificate Number
                          </p>
                          <p className="text-sm">BLS-2021-7890</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Issue Date</p>
                          <p className="text-sm">June 5, 2021</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Expiry Date</p>
                          <p className="text-sm">June 5, 2023</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <button className="flex items-center gap-2 rounded-md border border-neutral-400 px-3 py-1 text-sm font-medium transition-colors hover:bg-gray-50">
                          <FaFileAlt className="h-4 w-4" />
                          View Certificate
                        </button>
                        <button className="flex items-center gap-2 rounded-md border border-neutral-400 px-3 py-1 text-sm font-medium transition-colors hover:bg-gray-50">
                          <FaAward className="h-4 w-4" />
                          Renew
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* Pension & Retirement Tab */}
              <TabPanel>
                <div className="rounded-lg border border-neutral-200 bg-white">
                  <div className="border-b border-neutral-200 p-4">
                    <h2 className="text-lg font-semibold">
                      Pension & Retirement Details
                    </h2>
                    <p className="text-sm text-gray-500">
                      Retirement planning and pension information
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            Retirement Status
                          </h3>
                          <div className="mt-2 flex items-center gap-2">
                            <FaClock className="h-5 w-5 text-blue-500" />
                            <span className="text-sm">
                              Projected Retirement Date: January 15, 2053
                            </span>
                          </div>
                          <div className="mt-2 flex items-center gap-2">
                            <FiActivity className="h-5 w-5 text-green-500" />
                            <span className="text-sm">
                              Years of Service: 5 years, 4 months
                            </span>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold">
                            SSNIT Information
                          </h3>
                          <div className="mt-2 grid gap-2">
                            <div>
                              <p className="text-xs text-gray-500">
                                SSNIT Number
                              </p>
                              <p className="text-sm">SN-12345678-9</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">
                                Contribution Tier
                              </p>
                              <p className="text-sm">Tier 1 & Tier 2</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">
                                Last Contribution Date
                              </p>
                              <p className="text-sm">April 30, 2023</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            Pension Fund Manager
                          </h3>
                          <div className="mt-2 grid gap-2">
                            <div>
                              <p className="text-xs text-gray-500">
                                Fund Manager
                              </p>
                              <p className="text-sm">Enterprise Trustees</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Scheme ID</p>
                              <p className="text-sm">ET-987654-321</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">
                                Account Status
                              </p>
                              <p className="text-sm">Active</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold">
                            Additional Benefits
                          </h3>
                          <div className="mt-2">
                            <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                              Health Insurance
                            </span>
                            <span className="ml-2 inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                              Life Insurance
                            </span>
                            <span className="ml-2 inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                              Disability Coverage
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* Documents Tab */}
              <TabPanel>
                <div className="rounded-lg border border-neutral-200 bg-white">
                  <div className="border-b border-neutral-200 p-4">
                    <h2 className="text-lg font-semibold">Documents</h2>
                    <p className="text-sm text-gray-500">
                      Personal and professional documents
                    </p>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="rounded-lg border border-neutral-200 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FaFileAlt className="h-8 w-8 text-blue-500" />
                          <div>
                            <h3 className="font-semibold">National ID Card</h3>
                            <p className="text-sm text-gray-500">
                              Uploaded on January 15, 2023
                            </p>
                          </div>
                        </div>
                        <button className="rounded-md border px-3 py-1 text-sm font-medium transition-colors hover:bg-gray-50">
                          View
                        </button>
                      </div>
                    </div>

                    <div className="rounded-lg border border-neutral-200 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FaFileAlt className="h-8 w-8 text-blue-500" />
                          <div>
                            <h3 className="font-semibold">
                              Medical Degree Certificate
                            </h3>
                            <p className="text-sm text-gray-500">
                              Uploaded on January 15, 2023
                            </p>
                          </div>
                        </div>
                        <button className="rounded-md border px-3 py-1 text-sm font-medium transition-colors hover:bg-gray-50">
                          View
                        </button>
                      </div>
                    </div>

                    <div className="rounded-lg border border-neutral-200 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FaFileAlt className="h-8 w-8 text-blue-500" />
                          <div>
                            <h3 className="font-semibold">
                              Employment Contract
                            </h3>
                            <p className="text-sm text-gray-500">
                              Uploaded on January 15, 2023
                            </p>
                          </div>
                        </div>
                        <button className="rounded-md border border-neutral-400 px-3 py-1 text-sm font-medium transition-colors hover:bg-gray-50">
                          View
                        </button>
                      </div>
                    </div>

                    <div className="rounded-lg border border-neutral-200 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FaFileAlt className="h-8 w-8 text-blue-500" />
                          <div>
                            <h3 className="font-semibold">
                              Professional Indemnity Insurance
                            </h3>
                            <p className="text-sm text-gray-500">
                              Uploaded on January 15, 2023
                            </p>
                          </div>
                        </div>
                        <button className="rounded-md border border-neutral-400 px-3 py-1 text-sm font-medium transition-colors hover:bg-gray-50">
                          View
                        </button>
                      </div>
                    </div>

                    <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 mt-4">
                      <FaPlus className="h-4 w-4" />
                      Upload New Document
                    </button>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>

          {/* Action Panel */}
          <div className="rounded-lg border border-neutral-200 bg-white">
            <div className="border-b border-neutral-200 p-4">
              <h2 className="text-lg font-semibold">Action Panel</h2>
            </div>
            <div className="p-4">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
                <button className="flex flex-col items-center gap-1 rounded-md border border-neutral-200 p-4 transition-colors hover:bg-gray-50">
                  <FaAward className="h-5 w-5" />
                  <span className="text-sm">Promote</span>
                </button>
                <button className="flex flex-col items-center gap-1 rounded-md border border-neutral-200 p-4 transition-colors hover:bg-gray-50">
                  <FaBuilding className="h-5 w-5" />
                  <span className="text-sm">Transfer</span>
                </button>
                <button className="flex flex-col items-center gap-1 rounded-md border border-neutral-200 p-4 transition-colors hover:bg-gray-50">
                  <FaExclamationCircle className="h-5 w-5" />
                  <span className="text-sm">Flag</span>
                </button>
                <button className="flex flex-col items-center gap-1 rounded-md border p-4 text-amber-600 transition-colors hover:bg-gray-50">
                  <FaClock className="h-5 w-5" />
                  <span className="text-sm">Deactivate</span>
                </button>
                <button className="flex flex-col items-center gap-1 rounded-md border p-4 text-red-600 transition-colors hover:bg-gray-50">
                  <FaExclamationCircle className="h-5 w-5" />
                  <span className="text-sm">Archive</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewStaff;
