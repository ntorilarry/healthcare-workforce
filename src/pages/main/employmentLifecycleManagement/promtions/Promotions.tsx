import { LuChevronLeft, LuPlus } from "react-icons/lu";
import PromotionCards from "./components/PromotionCards";
import { useNavigate } from "react-router-dom";
import ApprovalPipeline from "./components/ApprovalPipeline";
import RecentPromotion from "./components/RecentPromotion";
import PromotionDatatable from "./components/PromotionDatatable";

export const Promotions = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-neutral-200 bg-white px-4 sm:gap-8 lg:px-6">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 cursor-pointer"
        >
          <LuChevronLeft className="h-4 w-4" />
          <span>Back to Dashboard</span>
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Promotions</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
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
