import { create } from "zustand/react";
import { PostsStore } from "@/core/domain/posts/types";
import { Post } from "./types";

const initialState = {
  posts: [],
  totalPages: 1,
  currentPage: 1,
};

export const usePostsStore = create<PostsStore>((set) => ({
  ...initialState,

  updatePostsState: (data: {
    posts: Post[];
    totalCount: number;
    limit: number;
    page: number;
  }) =>
    set({
      posts: data.posts,
      totalPages: Math.ceil(data.totalCount / data.limit),
      currentPage: data.page,
    }),

  appendPosts: (newPosts: Post[]) =>
    set((state) => ({
      posts: [...state.posts, ...newPosts],
    })),

  resetPosts: () => set(initialState),
}));
