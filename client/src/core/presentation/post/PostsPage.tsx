import { usePosts } from "@/core/domain/posts/hooks/usePosts";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/shared/sidebar";
import { SettingsSidebar } from "@/core/presentation/settings/SettingsSidebar";
import { useSettings } from "@/core/domain/settings/hooks/useSettings";
import { useCallback, useEffect } from "react";
import { Posts } from "@/core/presentation/post/Posts";
import { usePostsPages } from "@/core/domain/posts/hooks/usePostsPages";
import { useSettingsLoader } from "@/core/domain/settings/hooks/useSettingsLoader";

const PostsPage = () => {
  const { handleChangePage } = usePostsPages();
  const { loadSettings } = useSettingsLoader();
  const { isPending } = usePosts();
  const { isPending: isSettingsPending } = useSettings();

  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  const handleUpdate = useCallback(async () => {
    await loadSettings();
  }, [loadSettings]);

  console.log("render");

  return (
    <SidebarProvider>
      <SettingsSidebar onUpdate={handleUpdate} isPending={isSettingsPending} />
      <SidebarInset>
        <SidebarTrigger className="-ml-1" />
        <Posts handleChangePage={handleChangePage} isPending={isPending} />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default PostsPage;
