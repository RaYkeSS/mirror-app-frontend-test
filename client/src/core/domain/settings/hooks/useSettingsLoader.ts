import { useCallback } from "react";
import { useSettingsStore } from "../store";
import { useSettings } from "./useSettings";

export const useSettingsLoader = () => {
  const { mutateAsync, refetch } = useSettings();
  const { setAll } = useSettingsStore();

  const loadSettings = useCallback(async () => {
    const cachedData = await refetch();
    if (cachedData.data) {
      setAll(cachedData.data);
      return;
    }

    const newData = await mutateAsync();
    setAll(newData);
  }, [mutateAsync, refetch, setAll]);

  return { loadSettings };
};
