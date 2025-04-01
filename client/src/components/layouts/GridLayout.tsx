import { Fragment, ReactNode } from "react";

interface GridLayoutProps<T> {
  columns: number;
  rows: number;
  items: T[];
  render: (item: T) => ReactNode;
}

export function GridLayout<T>({
  columns,
  rows,
  items,
  render,
}: GridLayoutProps<T>) {
  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, auto)`,
      }}
    >
      {items.map((item, index) => (
        <Fragment key={index}>{render(item)}</Fragment>
      ))}
    </div>
  );
}
