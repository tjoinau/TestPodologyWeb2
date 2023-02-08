import { NavItem } from "src/app/models/nav-item";
import { Role } from "src/app/models/role";

export const navItems: NavItem[] = 
    [
        {
          path: "",
          title: "MENUITEMS.MAIN.TEXT",
          iconType: "",
          icon: "",
          class: "",
          groupTitle: true,
          badge: "",
          badgeClass: "",
          role: ["All"],
          isExpanded: false,
          items: [],
        },
      
        // Doctor Modules
        {
          path: "hcp-mainPage/hcp-dashboard",
          title: "Dashboard",
          iconType: "material-icons-two-tone",
          icon: "space_dashboard",
          class: "",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: [Role.hcp],
          isExpanded: false,
          items: [],
        },
        {
          path: "hcp-mainPage/consultation",
          title: "Consultations",
          iconType: "",
          icon: "",
          class: "ml-menu",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: [Role.hcp],
          isExpanded: false,
          items: [],
        },
        {
          path: "/hcp-mainPage/calendar",
          title: "Calendar",
          iconType: "",
          icon: "",
          class: "ml-menu",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: [Role.hcp],
          isExpanded: false,
          items: [],
        },
      
        // Patient Modules
        {
          path: "/patient-mainPage/patient-dashboard",
          title: "Dashboard",
          iconType: "material-icons-two-tone",
          icon: "space_dashboard",
          class: "",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: [Role.patient],
          isExpanded: false,
          items: [],
        },
        // Common Modules
      
        {
          path: "/patient-mainPage/consultations",
          title: "Consultations",
          iconType: "material-icons-two-tone",
          icon: "supervised_user_circle",
          class: "menu-toggle",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: [Role.patient],
          isExpanded: false,
          items: [],
        }
      ];