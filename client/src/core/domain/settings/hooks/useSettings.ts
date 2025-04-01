import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchSettings } from "@/core/domain/settings/api";
import { Settings, UseSettings } from "@/core/domain/settings/types";

const SETTINGS_QUERY_KEY = ["settings"] as const;

export const useSettings: UseSettings = () => {
  const query = useQuery({
    queryKey: SETTINGS_QUERY_KEY,
    queryFn: fetchSettings,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const mutation = useMutation<Settings, Error>({
    mutationFn: fetchSettings,
  });

  return {
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    isPending: mutation.isPending || query.isPending,
    isError: mutation.isError || query.isError,
    error: mutation.error || query.error,
    data: mutation.data || query.data,
    refetch: query.refetch,
  };
};
