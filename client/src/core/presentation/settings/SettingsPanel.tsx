import { Badge } from "@/components/shared/badge";
import { Card, CardContent } from "@/components/shared/card";
import { Label } from "@/components/shared/label";
import { Separator } from "@/components/shared/separator";
import { TooltipContent, TooltipTrigger } from "@/components/shared/tooltip";
import { Settings } from "@/core/domain/settings/types";
import { Tooltip } from "@radix-ui/react-tooltip";
import { Columns, FileText, Layout, Navigation, Rows } from "lucide-react";

interface SettingsPanelProps extends Settings {
  rows: number;
  columns: number;
}

export const SettingsPanel = ({
  layout,
  template,
  navigation,
  rows,
  columns,
}: SettingsPanelProps) => {
  return (
    <Card className="mx-2">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layout className="h-4 w-4 text-muted-foreground" />
              <Label>Макет</Label>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary">{layout?.current}</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Текущий макет отображения</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <Label>Шаблон</Label>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary">{template}</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Текущий шаблон</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Navigation className="h-4 w-4 text-muted-foreground" />
              <Label>Навигация</Label>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary">{navigation}</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Тип навигации</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rows className="h-4 w-4 text-muted-foreground" />
              <Label>Строки</Label>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary">{rows}</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Количество строк</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Columns className="h-4 w-4 text-muted-foreground" />
              <Label>Столбцы</Label>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary">{columns}</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Количество столбцов</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
