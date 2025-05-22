import { LuArrowRight } from "react-icons/lu";

const ApprovalPipeline = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white ">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Approval Pipeline</h3>
          <p className="text-sm text-gray-500">
            Current status of promotion requests in the approval process
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-6">
            <div className="rounded-lg border border-neutral-200 p-4">
              <h3 className="text-lg font-semibold">Department Head Review</h3>
              <p className="text-sm text-gray-500 mb-4">
                First stage of the approval process
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-sm font-medium">KM</span>
                    </div>
                    <div>
                      <p className="font-medium">Dr. Kofi Mensah</p>
                      <p className="text-sm text-gray-500">
                        Medical Officer → Senior Medical Officer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                      Approved
                    </span>
                    <p className="text-xs text-gray-500">May 5, 2025</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-sm font-medium">AO</span>
                    </div>
                    <div>
                      <p className="font-medium">Nurse Abena Owusu</p>
                      <p className="text-sm text-gray-500">
                        Staff Nurse → Senior Staff Nurse
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                      Approved
                    </span>
                    <p className="text-xs text-gray-500">May 8, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <LuArrowRight className="h-8 w-8 text-gray-300" />
            </div>

            <div className="rounded-lg border border-neutral-200 p-4">
              <h3 className="text-lg font-semibold">HR Review</h3>
              <p className="text-sm text-gray-500 mb-4">
                Second stage of the approval process
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-sm font-medium">KM</span>
                    </div>
                    <div>
                      <p className="font-medium">Dr. Kofi Mensah</p>
                      <p className="text-sm text-gray-500">
                        Medical Officer → Senior Medical Officer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                      In Review
                    </span>
                    <p className="text-xs text-gray-500">Pending</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-sm font-medium">AO</span>
                    </div>
                    <div>
                      <p className="font-medium">Nurse Abena Owusu</p>
                      <p className="text-sm text-gray-500">
                        Staff Nurse → Senior Staff Nurse
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                      In Review
                    </span>
                    <p className="text-xs text-gray-500">Pending</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <LuArrowRight className="h-8 w-8 text-gray-300" />
            </div>

            <div className="rounded-lg border border-neutral-200 p-4">
              <h3 className="text-lg font-semibold">Executive Approval</h3>
              <p className="text-sm text-gray-500 mb-4">
                Final stage of the approval process
              </p>

              <div className="flex items-center justify-center p-6 text-center">
                <p className="text-gray-500">No promotions at this stage yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalPipeline;
