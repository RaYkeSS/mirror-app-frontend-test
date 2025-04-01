import { formatDistanceToNow } from "date-fns";
import { Post } from "@/core/domain/posts/types";
import { Card, CardContent, CardFooter } from "@/components/shared/card.tsx";

interface ClassicTemplateProps {
  post: Post & { userName?: string };
}

export const ClassicTemplate = ({ post }: ClassicTemplateProps) => {
  const formattedDate = formatDistanceToNow(new Date(post.date), {
    addSuffix: true,
  });

  return (
    <Card className="h-full shadow-sm hover:shadow transition-shadow">
      <CardContent className="p-4 flex flex-col h-full">
        <p className="text-gray-800 mb-2 flex-grow">{post.caption}</p>

        <div className="flex justify-between text-sm text-muted-foreground mt-auto">
          <span>{post.likes} likes</span>
          <span>{post.comments} comments</span>
          <span>{formattedDate}</span>
        </div>
      </CardContent>

      {post.userName && (
        <CardFooter className="py-2 px-4 bg-muted/50">
          <span className="text-sm font-medium">{post.userName}</span>
        </CardFooter>
      )}
    </Card>
  );
};
