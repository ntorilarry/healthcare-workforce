import { useState } from "react";
import {
  FiUser,
  FiAward,
  FiCalendar,
  FiActivity,
  FiAlertCircle,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";

const HealthcareWorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState("licenses");

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}

        {/* Main Dashboard */}
        <main className="flex-1 overflow-auto">
          <div className="grid gap-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-4 p-6">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="text-xl font-medium text-gray-600">KM</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    Welcome back, Dr. Kofi Mensah
                  </h2>
                  <p className="text-gray-500">
                    Your profile is 85% complete. Complete your profile to
                    ensure all your information is up to date.
                  </p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 md:ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Complete Profile
                </button>
              </div>
            </div>

            {/* Profile Overview */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold">Profile Overview</h3>
                <p className="text-sm text-gray-500">
                  Your current employment information
                </p>
              </div>
              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Current Facility</p>
                    <div className="flex items-center gap-2">
                      <FaBuilding className="h-4 w-4 text-gray-500" />
                      <p className="font-medium">Korle Bu Teaching Hospital</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Department</p>
                    <div className="flex items-center gap-2">
                      <FiActivity className="h-4 w-4 text-gray-500" />
                      <p className="font-medium">Internal Medicine</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Role</p>
                    <div className="flex items-center gap-2">
                      <FiUser className="h-4 w-4 text-gray-500" />
                      <p className="font-medium">Senior Medical Officer</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Employment Status</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold">Notifications</h3>
                <p className="text-sm text-gray-500">
                  Recent alerts and updates
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-4">
                    <FiAlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">
                        Medical License Expiring Soon
                      </h3>
                      <p className="text-sm text-gray-500">
                        Your medical license will expire on May 15, 2025. Please
                        renew it before the expiration date.
                      </p>
                      <div className="mt-2">
                        <button className="px-3 py-1 border  border-neutral-400 rounded-md text-sm hover:bg-gray-50 transition-colors">
                          Renew License
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-4">
                    <FiCalendar className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">
                        Mandatory Training Scheduled
                      </h3>
                      <p className="text-sm text-gray-500">
                        You have been scheduled for a mandatory infection
                        control training on June 10, 2025.
                      </p>
                      <div className="mt-2">
                        <button className="px-3 py-1 border border-neutral-400 rounded-md text-sm hover:bg-gray-50 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-4">
                    <FiMail className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">
                        Document Verification Complete
                      </h3>
                      <p className="text-sm text-gray-500">
                        Your specialist certification has been verified and
                        added to your profile.
                      </p>
                      <div className="mt-2">
                        <button className="px-3 py-1 border border-neutral-400 rounded-md text-sm hover:bg-gray-50 transition-colors">
                          View Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* License & Certification Status */}
            <div>
              <div className="grid grid-cols-2 gap-2 mb-6">
                <button
                  onClick={() => setActiveTab("licenses")}
                  className={`py-2 px-4 text-sm font-medium rounded-md ${
                    activeTab === "licenses"
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Licenses & Certifications
                </button>
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={`py-2 px-4 text-sm font-medium rounded-md ${
                    activeTab === "upcoming"
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Upcoming Events
                </button>
              </div>

              {activeTab === "licenses" && (
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b border border-neutral-200">
                    <h3 className="text-lg font-semibold">
                      License & Certification Status
                    </h3>
                    <p className="text-sm text-gray-500">
                      Overview of your professional credentials
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
                        <div className="flex items-center gap-4">
                          <FiAward className="h-8 w-8 text-blue-500" />
                          <div>
                            <h3 className="font-semibold">Medical License</h3>
                            <p className="text-sm text-gray-500">
                              Ghana Medical Council
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Valid
                          </span>
                          <p className="mt-1 text-sm text-gray-500">
                            Expires: May 15, 2025
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
                        <div className="flex items-center gap-4">
                          <FiAward className="h-8 w-8 text-blue-500" />
                          <div>
                            <h3 className="font-semibold">
                              Specialist Certification
                            </h3>
                            <p className="text-sm text-gray-500">
                              Ghana College of Physicians
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
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
                        <div className="flex items-center gap-4">
                          <FiAward className="h-8 w-8 text-blue-500" />
                          <div>
                            <h3 className="font-semibold">
                              Basic Life Support
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "upcoming" && (
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b border-neutral-200">
                    <h3 className="text-lg font-semibold">Upcoming Events</h3>
                    <p className="text-sm text-gray-500">
                      Scheduled trainings and important dates
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 rounded-lg border border-neutral-200 p-4">
                        <FiCalendar className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h3 className="font-semibold">
                            Infection Control Training
                          </h3>
                          <p className="text-sm text-gray-500">
                            June 10, 2025 • 9:00 AM - 12:00 PM
                          </p>
                          <p className="text-sm text-gray-500">
                            Main Conference Room, Korle Bu Teaching Hospital
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 rounded-lg border border-neutral-200 p-4">
                        <FiCalendar className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h3 className="font-semibold">Department Meeting</h3>
                          <p className="text-sm text-gray-500">
                            June 15, 2025 • 2:00 PM - 3:30 PM
                          </p>
                          <p className="text-sm text-gray-500">
                            Internal Medicine Conference Room
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 rounded-lg border border-neutral-200 p-4">
                        <FiCalendar className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h3 className="font-semibold">
                            Annual Performance Review
                          </h3>
                          <p className="text-sm text-gray-500">
                            July 5, 2025 • 10:00 AM - 11:00 AM
                          </p>
                          <p className="text-sm text-gray-500">
                            HR Department, Administration Building
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <p className="text-sm text-gray-500">
                    Your registered contact details
                  </p>
                </div>
                <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50 transition-colors">
                  Update
                </button>
              </div>
              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <FiPhone className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-gray-500">+233 20 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMail className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-gray-500">
                        kofi.mensah@health.gov.gh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="h-4 w-4 text-gray-500" />
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default HealthcareWorkerDashboard;
