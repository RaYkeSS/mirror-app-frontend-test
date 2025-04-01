import { create } from "zustand";
import { LayoutParams, LayoutType } from "@/components/layouts";
import { TemplateType } from "@/components/templates";
import { NavigationType } from "@/components/navigation";
import { Settings } from "@/core/domain/settings/types";

type SettingsStore = {
  layout: Settings["layout"];
  template: Settings["template"];
  navigation: Settings["navigation"];

  setLayout: (layout: Settings["layout"]) => void;
  setTemplate: (template: Settings["template"]) => void;
  setNavigation: (navigation: Settings["navigation"]) => void;

  setAll: (settings: Settings) => void;

  get settings(): Settings;
};

export const useSettingsStore = create<SettingsStore>((set, get) => ({
  layout: {
    current: "" as LayoutType,
    params: {} as Record<LayoutType, LayoutParams>,
  },
  template: "" as TemplateType,
  navigation: "" as NavigationType,

  setLayout: (layout) => set({ layout }),
  setTemplate: (template) => set({ template }),
  setNavigation: (navigation) => set({ navigation }),

  setAll: (settings) =>
    set({
      layout: settings.layout,
      template: settings.template,
      navigation: settings.navigation,
    }),

  get settings() {
    return {
      layout: get().layout,
      template: get().template,
      navigation: get().navigation,
    };
  },
}));

export const useLayout = () => useSettingsStore((state) => state.layout);
export const useTemplate = () => useSettingsStore((state) => state.template);
export const useSetLayout = () => useSettingsStore((state) => state.setLayout);

export const useRows = () =>
  useSettingsStore(
    (state) => state?.layout?.params[state?.layout?.current]?.rows || 0,
  );
export const useColumns = () =>
  useSettingsStore(
    (state) => state?.layout?.params[state?.layout?.current]?.columns || 0,
  );
