export interface NavItem {
    path: string;
    title: string;
    iconType: string;
    icon: string;
    class: string;
    groupTitle: boolean;
    badge: string;
    badgeClass: string;
    role: string[];
    isExpanded: boolean;
    items: NavItem[];
}
