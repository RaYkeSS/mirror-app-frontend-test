import { useMutation } from "@tanstack/react-query";
import { fetchPosts } from "@/core/domain/posts/api";
import { Post, UsePosts } from "@/core/domain/posts/types";

export const usePosts: UsePosts = () => {
  const mutation = useMutation<
    { data: Post[]; totalCount: number },
    Error,
    { page: number; limit: number }
  >({
    mutationFn: async ({ page, limit }) => await fetchPosts(page, limit),
  });

  return {
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    data: mutation.data?.data || [],
    totalCount: mutation.data?.totalCount || 0,
  };
};
