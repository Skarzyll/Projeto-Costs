
import type { Metadata } from "next";
/* import localFont from "next/font/local"; */
import "./globals.css";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
}); */

export const metadata: Metadata = {
  title: "Costs",
  description: "Meu app de projetos",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-BR">
      <body className="/* `${geistSans.variable} ${geistMono.variable} antialiased` */" >
        {children}
      </body>
    </html>
  );
}
