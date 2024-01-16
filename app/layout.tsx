import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Weather app",
  description: "Search for current weather by city name",
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
