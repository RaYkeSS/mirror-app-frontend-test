import { Loader2 } from "lucide-react";
import { Button } from "@/components/shared/button.tsx";

interface LoadMoreProps {
  onClick: (page?: number) => void;
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
}

export const LoadMore = ({
  onClick,
  isLoading,
  currentPage,
  totalPages,
}: LoadMoreProps) => {
  if (currentPage >= totalPages) return null;

  return (
    <Button
      onClick={() => onClick()}
      disabled={isLoading}
      className="w-full sm:w-auto"
      variant="default"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Загрузка...
        </>
      ) : (
        "Загрузить еще"
      )}
    </Button>
  );
};
