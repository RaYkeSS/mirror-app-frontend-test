import { Container } from "@/components/shared/Container.tsx";
import { LayoutProvider } from "@/core/presentation/providers/LayoutProvider";
import { PostCard } from "@/core/presentation/post/PostCard";
import { NavigationProvider } from "@/core/presentation/providers/NavigationProvider";
import { usePostsStore } from "@/core/domain/posts/store";
import {
  useColumns,
  useRows,
  useSettingsStore,
} from "@/core/domain/settings/store";
import { memo, useCallback } from "react";
import { Post } from "@/core/domain/posts/types";
import { LayoutParams } from "@/components/layouts";

interface PostListProps {
  posts: Post[];
  template: "hover" | "classic";
  rows: LayoutParams["rows"];
  columns: LayoutParams["columns"];
}

const PostList = memo(({ posts, template, rows, columns }: PostListProps) => {
  const renderPost = useCallback(
    (post: Post) => <PostCard type={template} post={post} />,
    [template],
  );

  return (
    <LayoutProvider
      type="grid"
      items={posts}
      params={{ rows, columns }}
      render={renderPost}
    />
  );
});

interface PostsNavigationProps {
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  onPageChange: (page?: number) => void;
}

const PostsNavigation = memo(
  ({
    currentPage,
    totalPages,
    isLoading,
    onPageChange,
  }: PostsNavigationProps) => {
    const { navigation } = useSettingsStore();

    return (
      <NavigationProvider
        navigationType={navigation}
        onClick={onPageChange}
        totalPages={totalPages}
        isLoading={isLoading}
        currentPage={currentPage}
      />
    );
  },
);

interface PostsProps {
  handleChangePage: (page?: number) => void;
  isPending: boolean;
}

export const Posts = memo(({ handleChangePage, isPending }: PostsProps) => {
  const { posts, currentPage, totalPages } = usePostsStore();
  const { template } = useSettingsStore();
  const rows = useRows();
  const columns = useColumns();

  return (
    <>
      <Container>
        <PostList
          posts={posts}
          template={template}
          rows={rows}
          columns={columns}
        />
      </Container>
      <Container className="mt-8 flex justify-center">
        <PostsNavigation
          currentPage={currentPage}
          totalPages={totalPages}
          isLoading={isPending}
          onPageChange={handleChangePage}
        />
      </Container>
    </>
  );
});
