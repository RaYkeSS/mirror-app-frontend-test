import { Settings } from "@/core/domain/settings/types";

export const fetchSettings = async (): Promise<Settings> => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/settings`);
  return response.json();
};
