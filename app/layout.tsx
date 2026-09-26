import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "om.choudhary - VS Code",
  description: "Om Choudhary — Full Stack Developer & AI Engineer. A VS Code-themed portfolio showcasing projects, skills, and experience.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col overflow-hidden">{children}</body>
    </html>
  );
}