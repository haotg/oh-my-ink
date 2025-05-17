import {
  TATTOO_ARTISTS_DESIGNS,
  SPCA_COLLABORATION,
} from "@/constants/start.constant";
import DesignSelector from "@/components/custom/DesignSelector";
import DesignGrid from "@/components/custom/DesignGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start",
};

export default function Start() {
  return (
    <>
      <DesignSelector />
      <DesignGrid data={TATTOO_ARTISTS_DESIGNS} id="tattoo-artists-designs" />
      <DesignGrid data={SPCA_COLLABORATION} id="spca-collaboration" />
    </>
  );
}
