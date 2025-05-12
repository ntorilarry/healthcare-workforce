import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import MainLayout from "../shared/MainLayout";
import Dashboard2 from "../pages/main/dashboard2/Dashboard2";
import { Dashboard } from "../pages/main/dashboard/Dashboard";
import Staff from "../pages/main/staff/Staff";

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
        <Route path="staff-management" element={<Staff />} />
      </Route>
      {/* <Route path="/*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default AppRouter;
