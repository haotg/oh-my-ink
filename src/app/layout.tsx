import { Roboto } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const roboto = Roboto({
  weight: ["100", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Oh My Ink",
    absolute: "",
  },
  description: "AI-Powered Tattoo Try-On Platform",
  icons: {
    icon: "/oh_my_ink.avif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <main className="px-4 py-5 md:px-20 md:py-10">{children}</main>
      </body>
    </html>
  );
}
