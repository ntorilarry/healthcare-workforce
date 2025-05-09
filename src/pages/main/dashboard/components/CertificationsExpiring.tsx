const CertificationsExpiring = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-gray-200 bg-white">
        <div className="p-4">
          <h3 className="text-lg font-medium">Certifications Expiring Soon</h3>
          <p className="text-sm text-gray-500">
            Staff with certifications expiring in the next 30 days
          </p>
        </div>
        <div className="p-4 pt-0">
          <div className="overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 text-left">
                  <th className="px-4 py-3 font-medium">Staff Name</th>
                  <th className="px-4 py-3 font-medium">Certification</th>
                  <th className="px-4 py-3 font-medium">Facility</th>
                  <th className="px-4 py-3 font-medium">Expiry Date</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="px-4 py-3">Dr. Kofi Mensah</td>
                  <td className="px-4 py-3">Medical License</td>
                  <td className="px-4 py-3">Korle Bu Teaching Hospital</td>
                  <td className="px-4 py-3">May 15, 2025</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                      Expiring Soon
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
                      Notify
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="px-4 py-3">Nurse Abena Owusu</td>
                  <td className="px-4 py-3">Nursing License</td>
                  <td className="px-4 py-3">Ridge Hospital</td>
                  <td className="px-4 py-3">May 18, 2025</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                      Expiring Soon
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
                      Notify
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="px-4 py-3">Dr. Esi Agyemang</td>
                  <td className="px-4 py-3">Specialist Certification</td>
                  <td className="px-4 py-3">Komfo Anokye Teaching Hospital</td>
                  <td className="px-4 py-3">May 22, 2025</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                      Expiring Soon
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
                      Notify
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Lab Tech. Kwame Boateng</td>
                  <td className="px-4 py-3">Lab Technician License</td>
                  <td className="px-4 py-3">Cape Coast Teaching Hospital</td>
                  <td className="px-4 py-3">May 30, 2025</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                      Expiring Soon
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
                      Notify
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsExpiring;
