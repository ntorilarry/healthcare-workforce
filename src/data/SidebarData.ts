import { FiUsers } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

export const navigation = [
  {
    name: "Dashboards",
    href: "/dashboard",
    icon: RxDashboard,
    subItems: [
      {
        name: "Dashboard1",
        href: "/dashboard1",
        icon: MdOutlineDashboardCustomize,
      },
      {
        name: "Dashboard2",
        href: "/dashboard2",
        icon: RiDashboardHorizontalLine,
      },
    ],
  },

  {
    name: "Staff Management",
    href: "/staff/list",
    icon: FiUsers,
  },
];
