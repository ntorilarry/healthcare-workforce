import { LuArrowRight } from "react-icons/lu";

const ApprovalFlow = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Transfer Approval Flow</h3>
          <p className="text-sm text-gray-500">
            Current status of transfer requests in the approval process
          </p>
        </div>
        <div className="p-4 pt-0">
          <div className="space-y-6">
            <div className="rounded-lg border border-neutral-200 p-4">
              <h3 className="text-lg font-semibold">
                Origin Facility Approval
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                First stage of the approval process
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium">KM</span>
                    </div>
                    <div>
                      <p className="font-medium">Dr. Kofi Mensah</p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">
                          Korle Bu Teaching Hospital
                        </span>
                        <LuArrowRight className="h-4 w-4 text-gray-400" />
                        <span>Ridge Hospital</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Approved
                    </span>
                    <p className="text-xs text-gray-500">May 5, 2025</p>
                  </div>
                </div>
                {/* Additional items... */}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <LuArrowRight className="h-8 w-8 text-gray-300" />
            </div>

            <div className="rounded-lg border border-neutral-200 p-4">
              <h3 className="text-lg font-semibold">
                Destination Facility Approval
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Second stage of the approval process
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium">KM</span>
                    </div>
                    <div>
                      <p className="font-medium">Dr. Kofi Mensah</p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">
                          Korle Bu Teaching Hospital
                        </span>
                        <LuArrowRight className="h-4 w-4 text-gray-400" />
                        <span>Ridge Hospital</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                      In Review
                    </span>
                    <p className="text-xs text-gray-500">Pending</p>
                  </div>
                </div>
                {/* Additional items... */}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <LuArrowRight className="h-8 w-8 text-gray-300" />
            </div>

            <div className="rounded-lg border border-neutral-200 p-4">
              <h3 className="text-lg font-semibold">HR Final Approval</h3>
              <p className="text-sm text-gray-500 mb-4">
                Final stage of the approval process
              </p>

              <div className="flex items-center justify-center p-6 text-center">
                <p className="text-gray-500">No transfers at this stage yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalFlow;
