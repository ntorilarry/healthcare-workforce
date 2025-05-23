import { LuPlus } from "react-icons/lu";
import PromotionCards from "./components/PromotionCards";
import ApprovalPipeline from "./components/ApprovalPipeline";
import RecentPromotion from "./components/RecentPromotion";
import PromotionDatatable from "./components/PromotionDatatable";

export const Promotions = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-4 overflow-auto">
        <div className="grid gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Promotions</h2>
              <p className="text-gray-500">
                Manage staff promotions and career advancement
              </p>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                <LuPlus className="mr-2 h-4 w-4" />
                New Promotion
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <PromotionCards />

          {/* Main Content */}
          <PromotionDatatable />

          {/* Approval Pipeline */}
          <ApprovalPipeline />

          {/* Recent Promotions */}
          <RecentPromotion />
        </div>
      </main>
    </div>
  );
};
