const CertificationStatus = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Certification Status</h3>
          <p className="text-sm text-gray-500">
            Professional certification overview
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Valid Certifications</span>
            <div className="text-right">
              <div className="text-sm font-medium">2,845</div>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                95.2%
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Expiring in 90 days</span>
            <div className="text-right">
              <div className="text-sm font-medium">124</div>
              <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                4.1%
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Expired</span>
            <div className="text-right">
              <div className="text-sm font-medium">21</div>
              <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                0.7%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationStatus;
