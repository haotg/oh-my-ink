import HCard from "@/components/custom/HCard";
import SectionTitle from "@/components/custom/SectionTitle";

interface Design {
  id: number;
  src: string;
  name: string;
  amount: number;
  width: number;
  height: number;
}

interface DesignGridProps {
  data: Design[];
  id: string;
}

export default function DesignGrid({ data, id }: DesignGridProps) {
  const title = id.replaceAll("-", " ");
  return (
    <div className="mb-5" id={id}>
      <SectionTitle title={title} />
      <div className="overflow-x-auto flex flex-col gap-2 scrollbar-hide">
        <div className="grid grid-flow-col gap-2 auto-cols-[15.625rem]">
          {data.slice(0, Math.ceil(data.length / 2)).map((design) => (
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
        <div className="grid grid-flow-col gap-2 auto-cols-[15.625rem]">
          {data.slice(Math.ceil(data.length / 2)).map((design) => (
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
      </div>
    </div>
  );
}
