import { FiUsers } from "react-icons/fi";
import {
  MdOutlineDashboardCustomize,
  MdOutlineSpaceDashboard,
  MdOutlineWorkOutline,
} from "react-icons/md";
import { RiDashboardHorizontalLine, RiPassExpiredLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { GrCertificate } from "react-icons/gr";
import { TbLicense } from "react-icons/tb";

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
      {
        name: "Healthcare Worker",
        href: "/healthcare-worker-dashboard",
        icon: MdOutlineSpaceDashboard,
      },
    ],
  },

  {
    name: "Workforce Management",
    href: "workforce-management/list-staff",
    icon: FiUsers,
  },

  {
    name: "Certification & Licensing",
    href: "/certification-&-licensing/list-certificates",
    icon: GrCertificate,
    subItems: [
      {
        name: "List Certificates",
        href: "/certification-&-licensing/list-certificates",
        icon: TbLicense,
      },
      {
        name: "Expiry Alerts",
        href: "/certification-&-licensing/expiry-alerts",
        icon: RiPassExpiredLine,
      },
    ],
  },
  {
    name: "Employment Lifecycle",
    href: "/certification-&-licensing/list-certificates",
    icon: MdOutlineWorkOutline,
    subItems: [
      {
        name: "List Certificates",
        href: "/certification-&-licensing/list-certificates",
        icon: TbLicense,
      },
      {
        name: "Expiry Alerts",
        href: "/certification-&-licensing/expiry-alerts",
        icon: RiPassExpiredLine,
      },
    ],
  },
];
