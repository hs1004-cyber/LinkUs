import { Badge } from "@/components/ui/badge";

const emotionColors = {
  행복해요: "happy",
  신나요: "excited",
  평온해요: "calm",
  생각중이에요: "thoughtful",
  그리워요: "nostalgic",
} as const;

type EmotionType = keyof typeof emotionColors;

interface EmotionTagProps {
  emotion: EmotionType;
  className?: string;
}

export function EmotionTag({ emotion, className = "" }: EmotionTagProps) {
  const colorKey = emotionColors[emotion];
  
  return (
    <Badge
      className={`font-accent uppercase text-xs tracking-wide ${className}`}
      style={{
        backgroundColor: `hsl(${emotionColors[emotion]} / 0.15)`,
        color: `hsl(${emotionColors[emotion]})`,
        border: `1px solid hsl(${emotionColors[emotion]} / 0.3)`,
      }}
      data-testid={`tag-emotion-${emotion}`}
    >
      {emotion}
    </Badge>
  );
}

export type { EmotionType };
