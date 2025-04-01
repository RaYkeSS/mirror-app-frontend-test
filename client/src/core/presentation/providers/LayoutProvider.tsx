import { ComponentType, memo, ReactNode } from "react";
import { Post } from "@/core/domain/posts/types";
import { LayoutParams, LAYOUTS_REGISTRY } from "@/components/layouts";

interface LayoutProviderProps<T = Post> {
  type: keyof typeof LAYOUTS_REGISTRY;
  params: LayoutParams;
  items: T[];
  render: (item: T) => ReactNode;
}

function LayoutProviderComponent<T = Post>({
  type,
  params,
  items,
  render,
}: LayoutProviderProps<T>) {
  const LayoutComponent = LAYOUTS_REGISTRY[type] as ComponentType<
    {
      items: T[];
      render: (item: T) => ReactNode;
    } & LayoutParams
  >;

  return <LayoutComponent {...params} items={items} render={render} />;
}

export const LayoutProvider = memo(LayoutProviderComponent) as <T = Post>(
  props: LayoutProviderProps<T>,
) => ReactNode;
