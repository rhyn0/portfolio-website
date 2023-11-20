import { type Project } from "@/types/project";
import HeaderNavbar from "./HeaderNav";
import ModeToggle from "./modeToggle";

import Link from "next/link";

const NumProjectDisplayed = 3;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formatProject(project: any): Project & { updated_at: Date } {
   return {
      id: project["id"],
      title: project["name"],
      description: project["description"],
      url: project["html_url"],
      updated_at: new Date(project["updated_at"]),
   };
}

function projectSort(a: { updated_at: Date }, b: { updated_at: Date }): number {
   return b.updated_at.valueOf() - a.updated_at.valueOf();
}

async function getRecentProjects(): Promise<Project[]> {
   const res = await fetch("https://api.github.com/users/rhyn0/repos");
   const json: object[] = await res.json();
   return json
      .map(formatProject)
      .sort(projectSort)
      .slice(0, NumProjectDisplayed);
}

export default async function Header() {
   const recentProjects = await getRecentProjects();
   return (
      <header className="shadow shadow-brick-900">
         <div className="container flex h-14 w-full items-center">
            <div className="mx-10">
               <Link href="/">
                  <h1 className="text-2xl">Ryan Ozawa</h1>
               </Link>
            </div>
            <div className="flex flex-1 items-center justify-between">
               <HeaderNavbar projects={recentProjects} />
               <div className="self-end">
                  <ModeToggle />
               </div>
            </div>
         </div>
      </header>
   );
}
