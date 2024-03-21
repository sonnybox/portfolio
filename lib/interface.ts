export interface TechStack {
    name: string;
    icon: string;
    bgcolor: string;
    fgcolor: string;
}

export interface Item {
    icon?: string;
    name?: string;
    description?: string;
    techStack?: TechStack[];
    image?: string;
    link?: string;
}

export interface MousePosition {
    x: number;
    y: number;
}
