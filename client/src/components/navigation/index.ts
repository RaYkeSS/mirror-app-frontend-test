import { Pagination } from "./Pagination";
import { LoadMore } from "./LoadMore";

export const NAVIGATION_REGISTRY = {
  pagination: Pagination,
  "load-more": LoadMore,
} as const;

export type NavigationType = keyof typeof NAVIGATION_REGISTRY;
