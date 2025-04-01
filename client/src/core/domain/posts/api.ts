import { Post } from "@/core/domain/posts/types";

export const fetchPosts = async (
  page: number,
  limit: number,
): Promise<{ data: Post[]; totalCount: number }> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/posts?_expand=user&_page=${page}&_limit=${limit}`,
  );
  const data = await response.json();
  const totalCount = parseInt(response.headers.get("x-total-count") || "0", 10);

  return {
    data,
    totalCount,
  };
};
