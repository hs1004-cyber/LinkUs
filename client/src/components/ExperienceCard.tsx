import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle } from "lucide-react";
import { EmotionTag, type EmotionType } from "./EmotionTag";
import { useState } from "react";

interface ExperienceCardProps {
  id: number;
  title: string;
  content: string;
  emotion: EmotionType;
  nickname: string;
  selfIntro: string;
  imageUrl?: string;
  likesCount: number;
  commentsCount: number;
  createdAt: string;
  isLiked?: boolean;
}

export function ExperienceCard({
  id,
  title,
  content,
  emotion,
  nickname,
  selfIntro,
  imageUrl,
  likesCount,
  commentsCount,
  createdAt,
  isLiked: initialIsLiked = false,
}: ExperienceCardProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likes, setLikes] = useState(likesCount);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
    console.log(`Like toggled for card ${id}`);
  };

  return (
    <Card className="overflow-hidden hover-elevate transition-shadow duration-200" data-testid={`card-experience-${id}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <EmotionTag emotion={emotion} />
          <span className="text-sm text-muted-foreground" data-testid={`text-time-${id}`}>
            {createdAt}
          </span>
        </div>

        {imageUrl && (
          <div className="mb-4 -mx-6 -mt-2">
            <img
              src={imageUrl}
              alt={title}
              className="w-full aspect-video object-cover"
              data-testid={`img-experience-${id}`}
            />
          </div>
        )}

        <h3 className="text-xl font-semibold mb-3" data-testid={`text-title-${id}`}>
          {title}
        </h3>

        <p className="text-foreground leading-relaxed mb-4 line-clamp-3" data-testid={`text-content-${id}`}>
          {content}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-card-border">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium" data-testid={`text-nickname-${id}`}>{nickname}</span>
            <span className="text-sm text-muted-foreground" data-testid={`text-intro-${id}`}>· {selfIntro}</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={isLiked ? "text-[hsl(340_65%_70%)]" : ""}
              data-testid={`button-like-${id}`}
            >
              <Heart className={`h-4 w-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
              <span data-testid={`text-likes-${id}`}>{likes}</span>
            </Button>

            <Button variant="ghost" size="sm" data-testid={`button-comment-${id}`}>
              <MessageCircle className="h-4 w-4 mr-1" />
              <span data-testid={`text-comments-${id}`}>{commentsCount}</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export type { ExperienceCardProps };
