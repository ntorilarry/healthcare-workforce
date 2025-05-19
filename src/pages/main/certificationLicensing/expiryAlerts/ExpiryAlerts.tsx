import { LuBell, LuMail } from "react-icons/lu";
import ExpiryCards from "./components/ExpiryCards";
import ExpiryTable from "./components/ExpiryTable";

export const ExpiryAlerts = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-neutral-200 bg-white sm:gap-8">
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Certification Expiry Alerts</h1>
        </div>
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white p-0 text-sm font-medium  transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
          <LuBell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-4 ">
        <div className="grid gap-6">
          {/* Summary Cards */}
          <ExpiryCards />

          {/* Main Content Card */}
          <div className="rounded-lg border border-neutral-200 bg-white ">
            <ExpiryTable />
          </div>

          {/* Notification History */}
          <div className="rounded-lg border border-neutral-200 bg-white ">
            <div className="space-y-4 p-6">
              <div>
                <h2 className="text-lg font-semibold">Notification History</h2>
                <p className="text-sm text-gray-500">
                  Record of all certification-related notifications
                </p>
              </div>
              <div className="space-y-4">
                {/* Notification items */}
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
                  <div className="flex items-start gap-3">
                    <LuMail className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">
                        Expiry Notification Sent
                      </h3>
                      <p className="text-sm text-gray-500">
                        Medical License expiry notification sent to Dr. Kofi
                        Mensah
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                          Email Delivered
                        </span>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                          SMS Delivered
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">May 1, 2025</p>
                    <p className="text-xs text-gray-500">10:23 AM</p>
                  </div>
                </div>
                {/* Additional notification items would go here */}
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="rounded-lg border border-neutral-200 bg-white ">
            <div className="space-y-4 p-6">
              <div>
                <h2 className="text-lg font-semibold">Notification Settings</h2>
                <p className="text-sm text-gray-500">
                  Configure automatic notification schedules
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstNotification"
                      className="text-sm font-medium"
                    >
                      First Notification
                    </label>
                    <select
                      id="firstNotification"
                      className="mt-2 block w-full rounded-md border border-neutral-200 py-2 px-3 text-sm  focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    >
                      <option value="30">30 days before expiry</option>
                      <option value="60">60 days before expiry</option>
                      <option value="90">90 days before expiry</option>
                      <option value="120">120 days before expiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="secondNotification"
                      className="text-sm font-medium"
                    >
                      Second Notification
                    </label>
                    <select
                      id="secondNotification"
                      className="block mt-2 w-full rounded-md border border-neutral-200 py-2 px-3 text-sm  focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      defaultValue="60"
                    >
                      <option value="30">30 days before expiry</option>
                      <option value="45">45 days before expiry</option>
                      <option value="60">60 days before expiry</option>
                      <option value="75">75 days before expiry</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="finalNotification"
                      className="text-sm font-medium"
                    >
                      Final Notification
                    </label>
                    <select
                      id="finalNotification"
                      className="block mt-2 w-full rounded-md border border-neutral-200 py-2 px-3 text-sm  focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      defaultValue="30"
                    >
                      <option value="7">7 days before expiry</option>
                      <option value="14">14 days before expiry</option>
                      <option value="21">21 days before expiry</option>
                      <option value="30">30 days before expiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="notificationMethod"
                      className="text-sm font-medium"
                    >
                      Notification Methods
                    </label>
                    <select
                      id="notificationMethod"
                      className="block w-full mt-2 rounded-md border border-neutral-200 py-2 px-3 text-sm  focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      defaultValue="both"
                    >
                      <option value="email">Email only</option>
                      <option value="sms">SMS only</option>
                      <option value="both">Both Email and SMS</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
