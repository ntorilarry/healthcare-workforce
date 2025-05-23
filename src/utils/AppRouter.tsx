import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import MainLayout from "../shared/MainLayout";
import { Dashboard } from "../pages/main/dashboards/dashboard/Dashboard";
import Dashboard2 from "../pages/main/dashboards/dashboard2/Dashboard2";
import HealthcareWorkerDashboard from "../pages/main/dashboards/healthcareWorkerDashboard/HealthcareWorkerDashboard";
import { MFA } from "../pages/auth/MFA";
import ListStaff from "../pages/main/workforceManagement/liststaff/ListStaff";
import CreateStaff from "../pages/main/workforceManagement/createStaff/CreateStaff";
import ViewStaff from "../pages/main/workforceManagement/viewStaff/ViewStaff";
import EditCertificates from "../pages/main/certificationLicensing/editCertificates/EditCertificates";
import ListCertificate from "../pages/main/certificationLicensing/listCertificate/ListCertificate";
import { AddCertificate } from "../pages/main/certificationLicensing/addCertificates/AddCertificate";
import { ExpiryAlerts } from "../pages/main/certificationLicensing/expiryAlerts/ExpiryAlerts";
import { ViewCertificate } from "../pages/main/certificationLicensing/viewCertificate/ViewCertificate";
import { Promotions } from "../pages/main/employmentLifecycleManagement/promtions/Promotions";
import { Transfers } from "../pages/main/employmentLifecycleManagement/transfers/Transfers";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth">
        <Route index element={<Navigate replace to="login" />} />
        <Route path="login" element={<Login />} />
        <Route path="mfa" element={<MFA />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate replace to="/dashboard1" />} />
        <Route path="dashboard1" element={<Dashboard />} />
        <Route path="dashboard2" element={<Dashboard2 />} />
        <Route
          path="healthcare-worker-dashboard"
          element={<HealthcareWorkerDashboard />}
        />

        <Route path="workforce-management">
          <Route index element={<Navigate replace to="list-staff" />} />
          <Route path="list-staff" element={<ListStaff />} />
          <Route path="create-staff" element={<CreateStaff />} />
          <Route path="view-staff" element={<ViewStaff />} />
        </Route>

        <Route path="certification-&-licensing">
          <Route index element={<Navigate replace to="list-certificates" />} />
          <Route path="list-certificates" element={<ListCertificate />} />
          <Route path="add-certificates" element={<AddCertificate />} />
          <Route path="edit-certificates" element={<EditCertificates />} />
          <Route path="view-certificate" element={<ViewCertificate />} />
          <Route path="expiry-alerts" element={<ExpiryAlerts />} />
        </Route>

        <Route path="employment-lifecycle">
          <Route index element={<Navigate replace to="promotions" />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="transfers" element={<Transfers />} />
        </Route>
      </Route>

      {/* <Route path="/*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default AppRouter;
