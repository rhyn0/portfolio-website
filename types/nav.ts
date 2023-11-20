import { Project } from "./project";

export interface NavListItemProps {
   className?: string;
   title: string;
   href: URL | string;
   children?: React.ReactNode;
   // extendable
   [key: string]: unknown;
}

export interface HeaderNavProps {
   projects: Project[];
}

export interface NavListProps {
   children?: React.ReactNode;
}

export interface BannerListItemProps {
   className?: string;
   href: URL | string;
   title: string;
   description: string;
}
