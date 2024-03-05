import type { Metadata } from "next";
import "@/app/globals.css";
import { MSWComponent } from "@/app/_components/MSWComponent";

export const metadata: Metadata = {
  title: "study",
  description: "sutdyyyyyyyyyyyyyyyyyy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MSWComponent />
        {children}
      </body>
    </html>
  );
}
