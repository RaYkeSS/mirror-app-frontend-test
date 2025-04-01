import { LayoutParams, LayoutType } from "@/components/layouts";
import { TemplateType } from "@/components/templates";
import { NavigationType } from "@/components/navigation";
import { QueryObserverResult } from "@tanstack/react-query";

export interface Settings {
  layout: {
    current: LayoutType;
    params: Record<LayoutType, LayoutParams>;
  };
  template: TemplateType;
  navigation: NavigationType;
}

export type UseSettings = () => {
  mutate: () => void;
  mutateAsync: () => Promise<Settings>;
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  data?: Settings;
  refetch: () => Promise<QueryObserverResult<Settings, Error>>;
};
