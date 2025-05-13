import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import MainLayout from "../shared/MainLayout";
import Staff from "../pages/main/staffManagement/staff/Staff";
import { Dashboard } from "../pages/main/dashboards/dashboard/Dashboard";
import Dashboard2 from "../pages/main/dashboards/dashboard2/Dashboard2";
import CreateStaff from "../pages/main/staffManagement/createStaff/CreateStaff";
import ViewStaff from "../pages/main/staffManagement/viewStaff/ViewStaff";
import Certification from "../pages/main/certifications/Certification";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth">
        <Route index element={<Navigate replace to="login" />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate replace to="/dashboard1" />} />
        <Route path="dashboard1" element={<Dashboard />} />
        <Route path="dashboard2" element={<Dashboard2 />} />

        <Route path="staff">
          <Route index element={<Navigate replace to="list" />} />
          <Route path="list" element={<Staff />} />
          <Route path="create" element={<CreateStaff />} />
          <Route path="view" element={<ViewStaff />} />
        </Route>

        <Route path="certifications" element={<Certification />} />
      </Route>

      {/* <Route path="/*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default AppRouter;
