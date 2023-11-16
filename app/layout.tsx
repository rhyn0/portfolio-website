import type { Metadata } from "next";
import "./globals.css";

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
         <body>{children}</body>
      </html>
   );
}
