import { GiCancel } from "react-icons/gi";
import { IoWarningOutline } from "react-icons/io5";
import { LuCheck } from "react-icons/lu";
import { SiReadthedocs } from "react-icons/si";

const DisciplinaryCard = () => {
  return (
    <div>
      {" "}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white border-neutral-200">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium">Active Warnings</h3>
            <IoWarningOutline className="h-4 w-4 text-amber-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-gray-500">Currently active</p>
          </div>
        </div>
        <div className="rounded-lg border bg-white border-neutral-200">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium">Suspensions</h3>
            <LuCheck className="h-4 w-4 text-green-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-gray-500">This quarter</p>
          </div>
        </div>
        <div className="rounded-lg border bg-white border-neutral-200">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium">Terminations</h3>
            <GiCancel className="h-4 w-4 text-red-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500">This quarter</p>
          </div>
        </div>
        <div className="rounded-lg border bg-white border-neutral-200">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium">Pending Appeals</h3>
            <SiReadthedocs className="h-4 w-4 text-blue-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">Under review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisciplinaryCard;
