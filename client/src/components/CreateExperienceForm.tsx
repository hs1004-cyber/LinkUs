import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { type EmotionType } from "./EmotionTag";
import { useState } from "react";
import { ImagePlus, X } from "lucide-react";

interface CreateExperienceFormProps {
  onSubmit?: (data: FormData) => void;
  onCancel?: () => void;
}

interface FormData {
  title: string;
  content: string;
  emotion: EmotionType | "";
  nickname: string;
  selfIntro: string;
  image?: File;
}

const emotions: EmotionType[] = ["행복해요", "신나요", "평온해요", "생각중이에요", "그리워요"];

const emotionColors = {
  행복해요: "45 90% 60%",
  신나요: "25 85% 60%",
  평온해요: "200 60% 65%",
  생각중이에요: "280 50% 70%",
  그리워요: "20 60% 65%",
};

export function CreateExperienceForm({ onSubmit, onCancel }: CreateExperienceFormProps) {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    emotion: "",
    nickname: "",
    selfIntro: "",
  });
  const [imagePreview, setImagePreview] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData({ ...formData, image: undefined });
    setImagePreview("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.emotion && onSubmit) {
      onSubmit(formData as FormData & { emotion: EmotionType });
      console.log('Form submitted:', formData);
    }
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6" data-testid="text-form-title">오늘의 경험 공유하기</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="title" data-testid="label-title">제목</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="경험의 제목을 입력해주세요"
            required
            className="mt-2"
            data-testid="input-title"
          />
        </div>

        <div>
          <Label htmlFor="content" data-testid="label-content">내용</Label>
          <Textarea
            id="content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="어떤 경험이었나요? 자세히 공유해주세요"
            required
            className="mt-2 min-h-32"
            data-testid="input-content"
          />
        </div>

        <div>
          <Label data-testid="label-emotion">감정 태그</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {emotions.map((emotion) => (
              <button
                key={emotion}
                type="button"
                onClick={() => setFormData({ ...formData, emotion })}
                className={`px-4 py-2 rounded-full text-sm font-medium font-accent uppercase tracking-wide transition-all ${
                  formData.emotion === emotion
                    ? "ring-2 ring-offset-2 ring-primary"
                    : ""
                }`}
                style={{
                  backgroundColor: `hsl(${emotionColors[emotion]} / ${formData.emotion === emotion ? '0.25' : '0.15'})`,
                  color: `hsl(${emotionColors[emotion]})`,
                  border: `1px solid hsl(${emotionColors[emotion]} / 0.3)`,
                }}
                data-testid={`button-emotion-${emotion}`}
              >
                {emotion}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="image" data-testid="label-image">이미지 (선택)</Label>
          {imagePreview ? (
            <div className="mt-2 relative">
              <img src={imagePreview} alt="Preview" className="w-full rounded-lg aspect-video object-cover" data-testid="img-preview" />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={removeImage}
                className="absolute top-2 right-2"
                data-testid="button-remove-image"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <label
              htmlFor="image"
              className="mt-2 flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover-elevate"
              data-testid="label-image-upload"
            >
              <ImagePlus className="h-8 w-8 text-muted-foreground mb-2" />
              <span className="text-sm text-muted-foreground">이미지 업로드</span>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                data-testid="input-image"
              />
            </label>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nickname" data-testid="label-nickname">닉네임</Label>
            <Input
              id="nickname"
              value={formData.nickname}
              onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
              placeholder="닉네임"
              required
              className="mt-2"
              data-testid="input-nickname"
            />
          </div>

          <div>
            <Label htmlFor="selfIntro" data-testid="label-intro">한 줄 자기소개</Label>
            <Input
              id="selfIntro"
              value={formData.selfIntro}
              onChange={(e) => setFormData({ ...formData, selfIntro: e.target.value })}
              placeholder="예: 커피 애호가"
              required
              className="mt-2"
              data-testid="input-intro"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1" data-testid="button-cancel">
              취소
            </Button>
          )}
          <Button type="submit" className="flex-1" data-testid="button-submit">
            공유하기
          </Button>
        </div>
      </form>
    </Card>
  );
}
