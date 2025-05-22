import { LuArrowRight } from "react-icons/lu";

const RecentPromotion = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Recent Promotions</h3>
          <p className="text-sm text-gray-500">
            Recently approved and effective promotions
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-medium">EA</span>
                </div>
                <div>
                  <p className="font-medium">Dr. Esi Agyemang</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Specialist</span>
                    <LuArrowRight className="h-4 w-4 text-gray-400" />
                    <span className="font-medium">Senior Specialist</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Komfo Anokye Teaching Hospital
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                  Effective
                </span>
                <p className="mt-1 text-xs text-gray-500">
                  Since: April 15, 2025
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-medium">JA</span>
                </div>
                <div>
                  <p className="font-medium">Pharmacist John Ansah</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Pharmacist</span>
                    <LuArrowRight className="h-4 w-4 text-gray-400" />
                    <span className="font-medium">Senior Pharmacist</span>
                  </div>
                  <p className="text-xs text-gray-500">Ridge Hospital</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                  Effective
                </span>
                <p className="mt-1 text-xs text-gray-500">
                  Since: April 1, 2025
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-medium">GM</span>
                </div>
                <div>
                  <p className="font-medium">Nurse Grace Mensah</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Senior Staff Nurse</span>
                    <LuArrowRight className="h-4 w-4 text-gray-400" />
                    <span className="font-medium">
                      Principal Nursing Officer
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">37 Military Hospital</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                  Effective
                </span>
                <p className="mt-1 text-xs text-gray-500">
                  Since: March 15, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPromotion;
