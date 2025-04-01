import { HoverTemplate } from "./HoverTemplate";
import { ClassicTemplate } from "./ClassicTemplate";

export const TEMPLATES_REGISTRY = {
  hover: HoverTemplate,
  classic: ClassicTemplate,
} as const;

export type TemplateType = keyof typeof TEMPLATES_REGISTRY;
