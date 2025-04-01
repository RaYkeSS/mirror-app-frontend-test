import { TemplateProvider } from "@/core/presentation/providers/TemplateProvider";
import { Post } from "@/core/domain/posts/types";
import { TemplateType } from "@/components/templates";

interface PostCardProps {
  post: Post;
  type: TemplateType;
}

export const PostCard = ({ post, type }: PostCardProps) => {
  return (
    <div className="h-full">
      <TemplateProvider type={type} post={post} />
    </div>
  );
};
