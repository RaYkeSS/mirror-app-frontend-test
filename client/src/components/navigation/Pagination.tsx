import {
  PaginationItem,
  Pagination as ShadcnPagination,
  PaginationContent,
} from "@/components/shared/pagination.tsx";
import { Button } from "@/components/shared/button.tsx";
import { cn } from "@/core/domain/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onClick: (page: number) => void;
  isLoading: boolean;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onClick,
  isLoading,
}: PaginationProps) => {
  console.log("length", totalPages);

  return (
    <ShadcnPagination>
      <PaginationContent className="flex flex-wrap">
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          const isActive = currentPage === page;

          return (
            <PaginationItem key={page}>
              <Button
                onClick={() => onClick(page)}
                disabled={isLoading}
                variant={isActive ? "default" : "outline"}
                size="sm"
                className={cn(
                  "min-w-[40px]",
                  isLoading && "opacity-50 cursor-not-allowed",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {page}
              </Button>
            </PaginationItem>
          );
        })}
      </PaginationContent>
    </ShadcnPagination>
  );
};
