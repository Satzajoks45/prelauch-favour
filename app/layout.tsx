import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Komas500",
  description: "prelaunch website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <body>{children}</body>
    </html>
  );
}
