const RetirementProjection = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Retirement Projections</h3>
          <p className="text-sm text-gray-500">
            Expected retirements over next 5 years
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">2025</span>
            <span className="text-sm font-medium">156 staff</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">2026</span>
            <span className="text-sm font-medium">189 staff</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">2027</span>
            <span className="text-sm font-medium">234 staff</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">2028</span>
            <span className="text-sm font-medium">278 staff</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">2029</span>
            <span className="text-sm font-medium">312 staff</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementProjection;
