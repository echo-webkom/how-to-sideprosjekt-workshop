import type { Metadata } from "next";
import "./globals.css";
import Head from 'next/head';

export const metadata: Metadata = {
  title: "Trym",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        <Head>
            <title>{metadata.title as string}</title>
            <link rel="icon" href="../../public/favicon.ico"/>
        </Head>
        <html lang="no">
          <body>
            {/* <Navigation /> */}
            {children}
          </body>
        </html>
      </>
  );
}
