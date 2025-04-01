export interface Post {
  id: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  userId: string;
  permalink: string;
  userName?: string;
}

export interface PostsStore {
  posts: Post[];
  totalPages: number;
  currentPage: number;

  updatePostsState: (data: {
    posts: Post[];
    totalCount: number;
    limit: number;
    page: number;
  }) => void;
  appendPosts: (newPosts: Post[]) => void;
  resetPosts: () => void;
}

export type UsePosts = () => {
  mutate: (args: { page: number; limit: number }) => void;
  mutateAsync: (args: {
    page: number;
    limit: number;
  }) => Promise<{ data: Post[]; totalCount: number }>;
  data: Post[];
  totalCount: number;
  isPending: boolean;
  isError: boolean;
  error: Error | null;
};
