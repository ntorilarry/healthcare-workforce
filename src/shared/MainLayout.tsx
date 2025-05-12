import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-neutral-900 bg-blue-50 min-h-screen  rounded-4xl ">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="lg:pl-[250px] rounded-4xl">
        <div className="sticky top-0 z-40">
          <Header setSidebarOpen={setSidebarOpen} />
        </div>
        <main className="py-10 dark:bg-neutral-800 bg-white my-5 mx-5 lg:mr-5 lg:ml-0 rounded-4xl">
          <div className="px-4 sm:px-6 lg:px-8 rounded-4xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
