import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <Link
      href="/start"
      className="flex flex-col items-start justify-center h-screen cursor-pointer"
    >
      <h1 className="text-8xl font-normal mb-32">Touch to Start</h1>
      <div>
        <h3 className="text-4xl font-normal mb-2">Want to try on Tattoos?</h3>
        <p className="text-xl font-thin">
          Our AI-powered Tattoo try-on machine lets you visualize tattoos on
          your skin in real time, giving you a true-to-life preview.
        </p>
      </div>
    </Link>
  );
}
