"use client";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ModeToggle(): React.ReactNode {
   const { setTheme, resolvedTheme: theme } = useTheme();
   // whether we are on client yet or not.
   const [mounted, setMounted] = useState<boolean>(false);
   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return null;

   return (
      <>
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
               <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
               </DropdownMenuItem>
               <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
               </DropdownMenuItem>
               <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
         <p className="text-lg text-khaki-700 dark:text-plum-300">{`Current theme is ${theme}!`}</p>
      </>
   );
}
