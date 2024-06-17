import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kai's Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
