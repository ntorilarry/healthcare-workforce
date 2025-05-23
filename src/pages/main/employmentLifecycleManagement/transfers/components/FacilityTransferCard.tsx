import { LuArrowRight, LuBuilding, LuMapPin } from "react-icons/lu";

const FacilityTransferCard = () => {
  return (
    <div>
      <div className="rounded-lg border border-neutral-200">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-xl font-semibold leading-none tracking-tight">
            Facility Transfer Map
          </h3>
          <p className="text-sm text-muted-foreground">
            Overview of transfers between facilities
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-neutral-200 p-4">
                <div className="flex items-center gap-3">
                  <LuBuilding className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-semibold">
                      Korle Bu Teaching Hospital
                    </h3>
                    <div className="mt-1 flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <LuArrowRight className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Outgoing: 5</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LuArrowRight className="h-4 w-4 rotate-180 text-blue-500" />
                        <span className="text-sm">Incoming: 3</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <LuMapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Ridge Hospital</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LuArrowRight className="h-4 w-4 text-green-500" />
                      <span className="text-sm">3 transfers</span>
                    </div>
                  </div>
                  {/* Additional items... */}
                </div>
              </div>
              <div className="rounded-lg border border-neutral-200 p-4">
                <div className="flex items-center gap-3">
                  <LuBuilding className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-semibold">
                      Korle Bu Teaching Hospital
                    </h3>
                    <div className="mt-1 flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <LuArrowRight className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Outgoing: 5</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LuArrowRight className="h-4 w-4 rotate-180 text-blue-500" />
                        <span className="text-sm">Incoming: 3</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <LuMapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Ridge Hospital</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LuArrowRight className="h-4 w-4 text-green-500" />
                      <span className="text-sm">3 transfers</span>
                    </div>
                  </div>
                  {/* Additional items... */}
                </div>
              </div>
              {/* Additional facility cards... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityTransferCard;
