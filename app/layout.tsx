import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import Header from "@/components/Header";

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
      // hydration error comes from ThemeProvider
      <html lang="en" suppressHydrationWarning>
         <body>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <Header />
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}
