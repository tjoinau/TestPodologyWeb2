export interface NavItem {
    path: string;
    title: string;
    icon: string;
    class: string;
    role: string[];
    isExpanded: boolean;
    items: NavItem[];
    routerLink: string;
}
