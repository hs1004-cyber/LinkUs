import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onShareClick?: () => void;
}

export function HeroSection({ onShareClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(260_60%_65%)] via-[hsl(280_55%_60%)] to-[hsl(340_65%_70%)] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-accent text-5xl md:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
          우리의 일상과 경험이<br />
          자연스럽게 이어지는<br />
          연결 플랫폼
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
          20대 초반 청년들이 자신의 하루, 감정, 취향을<br />
          카드 형태로 공유하고 소통하는 공간
        </p>

        <Button 
          size="lg"
          onClick={onShareClick}
          className="bg-white text-[hsl(260_60%_65%)] hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
          data-testid="button-share-experience"
        >
          경험 공유하기
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
