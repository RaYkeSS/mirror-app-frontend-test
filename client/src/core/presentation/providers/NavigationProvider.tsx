import { NAVIGATION_REGISTRY } from "@/components/navigation";

interface NavigationProviderProps {
  navigationType: keyof typeof NAVIGATION_REGISTRY;
  totalPages: number;
  isLoading: boolean;
  onClick: (page?: number) => void;
  currentPage: number;
}

export const NavigationProvider = ({
  navigationType,
  totalPages,
  isLoading,
  onClick,
  currentPage,
}: NavigationProviderProps) => {
  const NavigationComponent = NAVIGATION_REGISTRY[navigationType];

  if (!NavigationComponent) return null;

  return (
    <NavigationComponent
      currentPage={currentPage}
      totalPages={totalPages}
      isLoading={isLoading}
      onClick={onClick}
    />
  );
};
