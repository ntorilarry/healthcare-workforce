import { FiDownload, FiEye, FiFileText, FiHome } from "react-icons/fi";
import { LuCalendar, LuDownload, LuFileClock, LuFileUser } from "react-icons/lu";

const CaseDetailsCard = () => {
  return (
    <div>
      {/* Case Details Modal/Card */}
      <div className="rounded-lg border border-neutral-200 bg-white shadow-sm">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Case Details - DA-2025-002</h3>
          <p className="text-sm text-gray-500">
            Detailed view of disciplinary action case
          </p>
        </div>
        <div className="p-4 pt-0">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Case Information</h3>
                <div className="mt-2 grid gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Case ID:</span>
                    <span className="font-mono text-sm">DA-2025-002</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Action Type:</span>
                    <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                      Suspension
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Date Issued:</span>
                    <span className="text-sm">May 5, 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Duration:</span>
                    <span className="text-sm">5 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Status:</span>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      Under Appeal
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Staff Information</h3>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <span className="text-sm font-medium text-gray-600">
                      AO
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">Nurse Abena Owusu</p>
                    <p className="text-sm text-gray-500">
                      Staff Nurse • ID: HW-2021-1187
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <FiHome className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        Ridge Hospital
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Reason & Details</h3>
                <div className="mt-2 space-y-2">
                  <div>
                    <span className="text-sm text-gray-500">
                      Primary Reason:
                    </span>
                    <p className="text-sm font-medium">Policy Violation</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Description:</span>
                    <p className="text-sm">
                      Violation of patient confidentiality protocols. Staff
                      member was observed discussing patient information in a
                      public area of the hospital, which is against hospital
                      policy and HIPAA regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">
                  Evidence & Attachments
                </h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3">
                    <div className="flex items-center gap-3">
                      <FiFileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Incident Report</p>
                        <p className="text-xs text-gray-500">
                          incident-report-2025-05-05.pdf
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center justify-center rounded-md p-1 text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <FiEye className="h-4 w-4" />
                      </button>
                      <button className="inline-flex items-center justify-center rounded-md p-1 text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <FiDownload className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3">
                    <div className="flex items-center gap-3">
                      <FiFileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Witness Statement</p>
                        <p className="text-xs text-gray-500">
                          witness-statement-dr-mensah.pdf
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center justify-center rounded-md p-1 text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <FiEye className="h-4 w-4" />
                      </button>
                      <button className="inline-flex items-center justify-center rounded-md p-1 text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <FiDownload className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3">
                    <div className="flex items-center gap-3">
                      <FiFileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Security Footage</p>
                        <p className="text-xs text-gray-500">
                          security-cam-05-05-2025.mp4
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center justify-center rounded-md p-1 text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <FiEye className="h-4 w-4" />
                      </button>
                      <button className="inline-flex items-center justify-center rounded-md p-1 text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <FiDownload className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3">
                    <div className="flex items-center gap-3">
                      <FiFileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Employee Response</p>
                        <p className="text-xs text-gray-500">
                          employee-response-letter.pdf
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center justify-center rounded-md p-1 text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <FiEye className="h-4 w-4" />
                      </button>
                      <button className="inline-flex items-center justify-center rounded-md p-1 text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <FiDownload className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3">
                    <div className="flex items-center gap-3">
                      <FiFileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Appeal Letter</p>
                        <p className="text-xs text-gray-500">
                          appeal-letter-2025-05-08.pdf
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center justify-center rounded-md p-1 text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <FiEye className="h-4 w-4" />
                      </button>
                      <button className="inline-flex items-center justify-center rounded-md p-1 text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <LuDownload className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Appeal Status</h3>
                <div className="mt-2 space-y-3">
                  <div className="rounded-lg bg-blue-50 p-3">
                    <div className="flex items-center gap-2">
                      <LuCalendar className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">Appeal Filed</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-600">
                      May 8, 2025 - Employee filed formal appeal
                    </p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-3">
                    <div className="flex items-center gap-2">
                      <LuFileClock className="h-4 w-4 text-amber-500" />
                      <span className="text-sm font-medium">Under Review</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-600">
                      Appeal is currently being reviewed by the disciplinary
                      committee
                    </p>
                  </div>
                  <div className="rounded-lg border border-dashed p-3">
                    <div className="flex items-center gap-2">
                      <LuFileUser className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        Hearing Scheduled
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      May 20, 2025 at 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Notes & Comments</h3>
              <div className="mt-2 space-y-3">
                <div className="rounded-lg border border-neutral-200 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                        <span className="text-xs font-medium text-gray-600">
                          HR
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        HR Manager - Sarah Johnson
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      May 5, 2025, 3:30 PM
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    Initial disciplinary action issued following investigation.
                    Employee has been notified of suspension and right to
                    appeal.
                  </p>
                </div>

                <div className="rounded-lg border border-neutral-200 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                        <span className="text-xs font-medium text-gray-600">
                          DM
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        Department Manager - Dr. Kwame Asante
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      May 6, 2025, 10:15 AM
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    Employee has been a good performer overall. This appears to
                    be an isolated incident. Recommend considering appeal
                    favorably if employee shows understanding of policy
                    violation.
                  </p>
                </div>

                <div className="rounded-lg border border-neutral-200 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                        <span className="text-xs font-medium text-gray-600">
                          AO
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        Nurse Abena Owusu (Employee)
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      May 8, 2025, 9:00 AM
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    I acknowledge the policy violation and take full
                    responsibility. I have completed additional HIPAA training
                    and request consideration for reduced suspension period.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button className="inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Add Note
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Upload Evidence
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetailsCard;
