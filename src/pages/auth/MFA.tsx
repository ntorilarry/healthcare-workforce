import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export const MFA = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [recoveryCode, setRecoveryCode] = useState("");

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus to next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Two-Factor Authentication
          </h1>
          <p className="text-gray-500">Verify your identity to continue</p>
        </div>

        <div className="rounded-lg bg-white border border-neutral-200">
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Enter Verification Code
              </h2>
              <p className="text-sm text-gray-500">
                We've sent a code to verify your identity
              </p>
            </div>

            <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
              <TabList className="grid grid-cols-3 gap-1 rounded-lg bg-gray-100 p-1">
                <Tab
                  className={`py-2 text-sm font-medium transition-colors ${
                    selectedTab === 0
                      ? "rounded-md bg-white shadow"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  OTP
                </Tab>
                <Tab
                  className={`py-2 text-sm font-medium transition-colors ${
                    selectedTab === 1
                      ? "rounded-md bg-white shadow"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  App
                </Tab>
                <Tab
                  className={`py-2 text-sm font-medium transition-colors ${
                    selectedTab === 2
                      ? "rounded-md bg-white shadow"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Recovery
                </Tab>
              </TabList>

              <TabPanels className="mt-4">
                {/* OTP Panel */}
                <TabPanel className="space-y-4">
                  <div className="text-center text-sm text-gray-500">
                    <p>We've sent a 6-digit code to:</p>
                    <p className="font-medium">k****h@health.gov.gh</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={otp[index]}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="h-12 w-12 rounded-md border border-gray-300 text-center text-lg focus:border-blue-500 focus:ring-blue-500"
                      />
                    ))}
                  </div>
                  <div className="text-center">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                      Didn't receive a code? Resend
                    </button>
                  </div>
                  <button className="w-full rounded-md bg-blue-600 py-2 px-4 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Verify
                  </button>
                </TabPanel>

                {/* App Panel */}
                <TabPanel className="space-y-4">
                  <div className="text-center text-sm text-gray-500">
                    <p>Enter the 6-digit code from your authenticator app</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <input
                        key={index}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={otp[index]}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="h-12 w-12 rounded-md border border-gray-300 text-center text-lg focus:border-blue-500 focus:ring-blue-500"
                      />
                    ))}
                  </div>
                  <button className="w-full rounded-md bg-blue-600 py-2 px-4 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Verify
                  </button>
                </TabPanel>

                {/* Recovery Panel */}
                <TabPanel className="space-y-4">
                  <div className="text-center text-sm text-gray-500">
                    <p>Enter one of your recovery codes</p>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="recoveryCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Recovery Code
                    </label>
                    <input
                      id="recoveryCode"
                      type="text"
                      value={recoveryCode}
                      onChange={(e) => setRecoveryCode(e.target.value)}
                      placeholder="Enter recovery code"
                      className="block w-full rounded-md border border-gray-300 py-2 px-3  focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <button className="w-full rounded-md bg-blue-600 py-2 px-4 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Verify
                  </button>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>

          <div className="flex justify-center border-t border-neutral-200 py-4">
            <Link
              to="/auth/login" // or href if using Next.js
              className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              <FiArrowLeft className="mr-1 h-4 w-4" />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
