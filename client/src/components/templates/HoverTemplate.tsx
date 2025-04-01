import { formatDistanceToNow } from "date-fns";
import { Post } from "@/core/domain/posts/types";
import { Card, CardContent, CardFooter } from "@/components/shared/card.tsx";

interface HoverTemplateProps {
  post: Post & { userName?: string };
}

export const HoverTemplate = ({ post }: HoverTemplateProps) => {
  const formattedDate = formatDistanceToNow(new Date(post.date), {
    addSuffix: true,
  });

  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-4">
        <p className="text-gray-800 mb-2 font-medium">{post.caption}</p>

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>❤️ {post.likes}</span>
          <span>💬 {post.comments}</span>
          <span>📅 {formattedDate}</span>
        </div>
      </CardContent>

      {post.userName && (
        <CardFooter className="py-2 px-4 bg-muted/50">
          <span className="text-sm font-semibold text-primary">
            👤 {post.userName}
          </span>
        </CardFooter>
      )}
    </Card>
  );
};
