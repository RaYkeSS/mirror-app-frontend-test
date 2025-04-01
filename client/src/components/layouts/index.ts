import { MasonryLayout } from "./MasonryLayout.tsx";
import { GridLayout } from "./GridLayout.tsx";

export const LAYOUTS_REGISTRY = {
  masonry: MasonryLayout,
  grid: GridLayout,
} as const;

export type LayoutType = keyof typeof LAYOUTS_REGISTRY;

export interface LayoutParams {
  columns: number;
  rows: number;
}
