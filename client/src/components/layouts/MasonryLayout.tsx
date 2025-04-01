import { Fragment, ReactNode } from "react";

interface MasonryLayoutProps<T> {
  columns: number;
  rows: number;
  items: T[];
  render: (item: T) => ReactNode;
}

export function MasonryLayout<T>({
  columns,
  items,
  render,
}: MasonryLayoutProps<T>) {
  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: "masonry",
      }}
    >
      {items.map((item, index) => (
        <Fragment key={index}>{render(item)}</Fragment>
      ))}
    </div>
  );
}
