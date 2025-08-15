import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Practice",
  description: "Imageコンポーネントの練習",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
