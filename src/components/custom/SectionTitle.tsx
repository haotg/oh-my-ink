"use client";
import Link from "next/link";
import slugify from "slugify";
import useDesignSelectorStore from "@/stores/design-selector.store";
import { useRouter } from "next/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface SectionTitleProps {
  title: string;
  back?: boolean;
}

export default function SectionTitle({
  title,
  back = false,
}: SectionTitleProps) {
  const { setActiveDesign } = useDesignSelectorStore();
  const router = useRouter();

  const handleClickTitle = () => {
    setActiveDesign(slugify(title.toLowerCase()));
    router.push(`/start/${slugify(title.toLowerCase())}`);
  };

  return (
    <>
      {!back ? (
        <div
          onClick={handleClickTitle}
          data-testid="section-title-forward"
          className="group text-2xl md:text-4xl font-normal uppercase mb-4 flex items-center gap-1 relative"
        >
          <h1 className="cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:scale-x-100">
            {title}
          </h1>
          <ChevronRight size={25} />
        </div>
      ) : (
        <Link
          href={`/start`}
          className="group flex-start flex-col text-2xl md:text-4xl font-normal uppercase mb-4 flex justify-start gap-2 relative"
        >
          <ChevronLeft size={25} />
          <h1 className="cursor-pointer w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100">
            {title}
          </h1>
        </Link>
      )}
    </>
  );
}
