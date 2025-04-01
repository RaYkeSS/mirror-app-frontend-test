import * as React from "react";

import {
  Sidebar,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSeparator,
  SidebarMenuButton,
} from "@/components/shared/sidebar.tsx";

import { RefreshCw } from "lucide-react";

import {
  useColumns,
  useRows,
  useSettingsStore,
} from "@/core/domain/settings/store";
import { ModeToggle } from "@/components/shared/ModeToggle.tsx";
import { SettingsPanel } from "./SettingsPanel";

interface SettingsSidebar extends React.ComponentProps<typeof Sidebar> {
  onUpdate: () => void;
  isPending: boolean;
}

export function SettingsSidebar({
  onUpdate,
  isPending,
  ...props
}: SettingsSidebar) {
  const { layout, template, navigation } = useSettingsStore();
  const rows = useRows();
  const columns = useColumns();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <ModeToggle />
      </SidebarHeader>

      <SidebarGroup>
        <SidebarGroupLabel>Настройки отображения</SidebarGroupLabel>
        <SettingsPanel
          layout={layout}
          template={template}
          navigation={navigation}
          rows={rows}
          columns={columns}
        />
      </SidebarGroup>

      <SidebarSeparator className="shrink-1 w-auto" style={{ width: "auto" }} />

      <SidebarGroup>
        <SidebarMenuButton
          onClick={onUpdate}
          disabled={isPending}
          tooltip="Обновить настройки"
          className="w-full mx-2"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Обновить</span>
        </SidebarMenuButton>
      </SidebarGroup>

      <SidebarRail />
    </Sidebar>
  );
}
