import PageTransition from "@/components/custom/PageTransition";
import Image from "next/image";
import Link from "next/link";

export default function StartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageTransition>
      <Link href="/start" className="flex items-center justify-center mb-5">
        <Image src="/oh_my_ink.avif" alt="oh my ink" width={45} height={45} />
        <h1 className="text-3xl font-bold">Oh My Ink</h1>
      </Link>
      {children}
    </PageTransition>
  );
}
