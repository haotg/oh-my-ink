import { create } from "zustand";

interface DesignSelectorStore {
  activeDesign: string | null;
  setActiveDesign: (design: string) => void;
}

const useDesignSelectorStore = create<DesignSelectorStore>((set) => ({
  activeDesign: null,
  setActiveDesign: (design) => set({ activeDesign: design }),
}));

export default useDesignSelectorStore;
