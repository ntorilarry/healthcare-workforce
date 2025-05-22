import { LuCalendar, LuClock, LuCheck } from "react-icons/lu";
import { GiCancel } from "react-icons/gi";

const PromotionCards = () => {
  return (
    <div>
      {" "}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white border-neutral-200">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium">Pending Approval</h3>
            <LuClock className="h-4 w-4 text-amber-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500">Awaiting review</p>
          </div>
        </div>
        <div className="rounded-lg border bg-white border-neutral-200">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium">Approved</h3>
            <LuCheck className="h-4 w-4 text-green-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-gray-500">This quarter</p>
          </div>
        </div>
        <div className="rounded-lg border bg-white border-neutral-200">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium">Rejected</h3>
            <GiCancel className="h-4 w-4 text-red-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-gray-500">This quarter</p>
          </div>
        </div>
        <div className="rounded-lg border bg-white border-neutral-200">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium">Upcoming Effective</h3>
            <LuCalendar className="h-4 w-4 text-blue-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-500">Next 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCards;
