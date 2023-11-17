import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";

export const metadata: Metadata = {
   title: "Ryan Ozawa's Portfolio",
   description: "SPA of previous and ongoing work",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}
