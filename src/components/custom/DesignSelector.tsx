"use client";
import { Button } from "@/components/ui/button";
import { DESIGNS } from "@/constants/start.constant";
import useDesignSelectorStore from "@/stores/design-selector.store";
import Link from "next/link";
import slugify from "slugify";

interface DesignSelectorProps {
  enableActiveState?: boolean;
}

export default function DesignSelector({
  enableActiveState = false,
}: DesignSelectorProps) {
  const { activeDesign, setActiveDesign } = useDesignSelectorStore();

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDesignClick = (designType: string) => {
    if (enableActiveState) {
      setActiveDesign(designType);
    } else {
      scrollToSection(designType);
    }
  };

  return (
    <div className="mb-5">
      <h1 className="text-2xl font-bold uppercase mb-2">select a design</h1>
      <div className="flex flex-wrap gap-2">
        {DESIGNS.map((design) =>
          enableActiveState ? (
            <Link
              href={`/start/${slugify(design.name.toLowerCase())}`}
              key={design.id}
            >
              <Button
                className="text-xs cursor-pointer"
                variant={activeDesign === design.type ? "default" : "outline"}
                onClick={() => handleDesignClick(design.type)}
              >
                {design.name}
              </Button>
            </Link>
          ) : (
            <Button
              className="text-xs cursor-pointer"
              variant="outline"
              key={design.id}
              onClick={() => handleDesignClick(design.type)}
            >
              {design.name}
            </Button>
          )
        )}
      </div>
    </div>
  );
}
