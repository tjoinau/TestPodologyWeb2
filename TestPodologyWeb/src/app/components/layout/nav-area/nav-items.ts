import { NavItem } from "src/app/models/nav-item";
import { Role } from "src/app/models/role";

export const navItems: NavItem[] = 
    [      
        // Doctor Modules
        {
          path: "healthCheckProvider/dashboard",
          title: "Dashboard",
          icon: "bi bi-columns",
          class: "",
          role: [Role.hcp],
          isExpanded: false,
          items: [{
            path: "healthCheckProvider/dashboard",
            title: "Dashboard",
            icon: "bi bi-speedometer",
            class: "",
            role: [Role.patient],
            isExpanded: false,
            items: [],
          }],
        },
        {
          path: "healthCheckProvider/consultation",
          title: "Consultations",
          icon: "bi bi-file-earmark-text",
          class: "ml-menu",
          role: [Role.hcp],
          isExpanded: false,
          items: [],
        },
        {
          path: "healthCheckProvider/patients",
          title: "Patients",
          icon: "bi bi-people",
          class: "ml-menu",
          role: [Role.hcp],
          isExpanded: false,
          items: [],
        },
        {
          path: "healthCheckProvider/calendar",
          title: "Calendar",
          icon: "bi bi-calendar-date",
          class: "ml-menu",
          role: [Role.hcp],
          isExpanded: false,
          items: [],
        },
      
        // Patient Modules
        {
          path: "patient/dashboard",
          title: "Dashboard",
          icon: "space_dashboard",
          class: "",
          role: [Role.patient],
          isExpanded: false,
          items: [],
        },
        {
          path: "patient/consultations",
          title: "Consultations",
          icon: "supervised_user_circle",
          class: "menu-toggle",
          role: [Role.patient],
          isExpanded: false,
          items: [],
        }
      ];