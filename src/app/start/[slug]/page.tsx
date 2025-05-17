import React from "react";
import * as C from "@/constants/start.constant";
import DesignSelector from "@/components/custom/DesignSelector";
import SectionTitle from "@/components/custom/SectionTitle";
import HCard from "@/components/custom/HCard";

interface Design {
  id: number;
  name: string;
  src: string;
  amount: number;
  width: number;
  height: number;
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = C[
    slug.toUpperCase().replaceAll("-", "_") as keyof typeof C
  ] as Design[];

  return (
    <>
      <DesignSelector enableActiveState />
      <SectionTitle title={slug.replaceAll("-", " ")} back />
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {data.map((design) => (
          <HCard
            key={design.id}
            src={design.src}
            title={design.name}
            amount={design.amount}
            width={design.width}
            height={design.height}
          />
        ))}
      </div>
    </>
  );
}
