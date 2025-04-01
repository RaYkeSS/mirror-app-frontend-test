import { useColumns } from "../../settings/store";
import { useRows } from "../../settings/store";
import { usePostsStore } from "../store";
import { usePosts } from "./usePosts";
import { useCallback, useEffect } from "react";

export const usePostsPages = () => {
  const { mutateAsync } = usePosts();
  const { updatePostsState, appendPosts } = usePostsStore();
  const rows = useColumns();
  const columns = useRows();

  const loadPosts = useCallback(
    async (page: number, shouldAppend = false) => {
      if (!rows || !columns) return;

      const limit = rows * columns;
      const { data, totalCount } = await mutateAsync({ page, limit });

      if (shouldAppend) {
        appendPosts(data);
      } else {
        updatePostsState({ posts: data, totalCount, limit, page });
      }
    },
    [rows, columns, mutateAsync, appendPosts, updatePostsState],
  );

  const handleChangePage = useCallback(
    async (page?: number) => {
      if (page !== undefined) {
        await loadPosts(page);
      } else {
        const nextPage = usePostsStore.getState().currentPage + 1;
        await loadPosts(nextPage, true);
      }
    },
    [loadPosts],
  );

  useEffect(() => {
    if (rows && columns) {
      loadPosts(1);
    }
  }, [rows, columns, loadPosts]);

  return {
    handleChangePage,
    currentPage: usePostsStore.getState().currentPage,
    loadPosts,
  };
};
