import { TEMPLATES_REGISTRY, TemplateType } from "@/components/templates";
import { Post } from "@/core/domain/posts/types";

interface TemplateProvider {
  type: TemplateType;
  post: Post;
}

export const TemplateProvider = ({ type, post }: TemplateProvider) => {
  // console.log("TemplateProvider", type, post);
  const Template = TEMPLATES_REGISTRY[type];

  if (!Template) return null;

  return <Template post={post} />;
};
