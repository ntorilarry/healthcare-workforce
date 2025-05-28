import { FiUsers } from "react-icons/fi";
import {
  MdOutlineDashboardCustomize,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { RiDashboardHorizontalLine, RiPassExpiredLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { GrCertificate } from "react-icons/gr";
import { TbLayoutDashboard, TbLicense } from "react-icons/tb";
import { BiTransfer } from "react-icons/bi";
import { GiStarCycle } from "react-icons/gi";
import { CiStar } from "react-icons/ci";
import { VscGithubAction, VscReport } from "react-icons/vsc";
import { SiGoogleanalytics } from "react-icons/si";

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
    href: "/employment-lifecycle/promotions",
    icon: GiStarCycle,
    subItems: [
      {
        name: "Promotions",
        href: "/employment-lifecycle/promotions",
        icon: CiStar,
      },
      {
        name: "Transfers",
        href: "/employment-lifecycle/Transfers",
        icon: BiTransfer,
      },
      {
        name: "Disciplinary Actions",
        href: "/employment-lifecycle/disciplinary",
        icon: VscGithubAction,
      },
    ],
  },
  {
    name: "Analytics & Reports",
    href: "/analytics/dashboard",
    icon: SiGoogleanalytics,
    subItems: [
      {
        name: "Dashboard",
        href: "/analytics/dashboard",
        icon: TbLayoutDashboard,
      },
      {
        name: "Report Builder",
        href: "/analytics/report-builder",
        icon: VscReport,
      },
    ],
  },
];
