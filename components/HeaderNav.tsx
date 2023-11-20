"use client";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import * as React from "react";

import Link from "next/link";
import {
   BannerListItemProps,
   HeaderNavProps,
   NavListItemProps,
   NavListProps,
} from "@/types/nav";

export default function HeaderNavbar({ projects }: HeaderNavProps) {
   return (
      <NavigationMenu>
         <NavigationMenuList>
            <NavigationMenuItem>
               <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
               <NavigationMenuContent>
                  <NavList>
                     <BannerListItem
                        title="Projects"
                        description="Recent projects that Ryan has been working on."
                        href="/projects"
                     />
                     <div className="justify-end bg-gradient-to-b from-muted/50 to-muted p-3 text-lg font-medium leading-tight">
                        Recent Projects
                     </div>
                     {projects.map((project) => {
                        return (
                           <ListItem
                              key={project.id}
                              title={project.title}
                              href={project.url}
                           >
                              {project.description}
                           </ListItem>
                        );
                     })}
                  </NavList>
               </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
               <NavigationMenuContent>
                  <NavList>
                     <ul>
                        <NavigationMenuLink asChild>
                           <Link href="/posts">Posts</Link>
                        </NavigationMenuLink>
                     </ul>
                  </NavList>
               </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <NavigationMenuLink asChild>
                  <Link href="/about" className="m-2 px-1">
                     About
                  </Link>
               </NavigationMenuLink>
            </NavigationMenuItem>
         </NavigationMenuList>
      </NavigationMenu>
   );
}

/**
 *
 * @param className stylings applied to list item tag
 * @returns
 */
function BannerListItem({
   className,
   href,
   title,
   description,
}: BannerListItemProps) {
   return (
      <li className={cn("row-span-4", className)}>
         <NavigationMenuLink asChild>
            <Link
               href={href}
               className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            >
               <div className="mb-2 mt-5 text-lg font-medium">{title}</div>
               <p className="whitespace-normal text-sm leading-tight text-muted-foreground">
                  {description}
               </p>
            </Link>
         </NavigationMenuLink>
      </li>
   );
}

function NavList({ children }: NavListProps) {
   return (
      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
         {children}
      </ul>
   );
}

function ListItem({
   className,
   title,
   children,
   href,
   ...props
}: NavListItemProps) {
   return (
      <li>
         <NavigationMenuLink asChild>
            <Link
               href={href}
               className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  className,
               )}
               {...props}
            >
               <div className="text-sm font-medium leading-none">{title}</div>
               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
               </p>
            </Link>
         </NavigationMenuLink>
      </li>
   );
}
