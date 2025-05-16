import { LuCalendar, LuClock, LuLoaderCircle } from "react-icons/lu";

const ExpiryCards = () => {
  return (
    <div>
      {" "}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Expiring in 30 Days */}
        <div className="rounded-lg border border-neutral-200 bg-white shadow-sm">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium">Expiring in 30 Days</h3>
            <LuLoaderCircle className="h-4 w-4 text-amber-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-gray-500">
              Requires immediate attention
            </p>
          </div>
        </div>

        {/* Expiring in 60 Days */}
        <div className="rounded-lg border border-neutral-200 bg-white shadow-sm">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium">Expiring in 60 Days</h3>
            <LuClock className="h-4 w-4 text-blue-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">78</div>
            <p className="text-xs text-gray-500">Plan for renewal</p>
          </div>
        </div>

        {/* Expiring in 90 Days */}
        <div className="rounded-lg border border-neutral-200 bg-white shadow-sm">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium">Expiring in 90 Days</h3>
            <LuCalendar className="h-4 w-4 text-gray-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-gray-500">Early notification stage</p>
          </div>
        </div>

        {/* Already Expired */}
        <div className="rounded-lg border bg-white border-neutral-200 shadow-sm">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium">Already Expired</h3>
            <LuLoaderCircle className="h-4 w-4 text-red-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-gray-500">Critical attention required</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpiryCards;
