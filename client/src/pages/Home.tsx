import { HeroSection } from "@/components/HeroSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Shield } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  //todo: remove mock functionality
  const mockPosts = [
    {
      id: 1,
      title: "오늘 처음 가본 카페",
      content: "동네에 새로 생긴 카페에 갔는데 분위기가 너무 좋았어요. 조용하고 아늑해서 책 읽기 딱 좋더라고요. 라떼도 맛있었고 직원분도 친절하셨어요. 다음에 또 가고 싶네요.",
      emotion: "행복해요" as const,
      nickname: "민지",
      selfIntro: "카페 탐방러",
      likesCount: 12,
      commentsCount: 3,
      createdAt: "2시간 전",
    },
    {
      id: 2,
      title: "대학 과제 완성!",
      content: "밤새 고생했던 프로젝트를 드디어 완성했어요. 팀원들이랑 협력해서 만든 결과물이라 더 뿌듯하네요. 발표 준비만 남았는데 잘 될 것 같아요!",
      emotion: "신나요" as const,
      nickname: "준호",
      selfIntro: "공대생",
      likesCount: 24,
      commentsCount: 7,
      createdAt: "4시간 전",
    },
    {
      id: 3,
      title: "저녁 산책하면서",
      content: "요즘 날씨가 딱 좋아서 매일 저녁에 산책을 나가요. 오늘은 노을이 유난히 예뻐서 한참을 보고 왔어요. 이런 작은 순간들이 참 소중하네요.",
      emotion: "평온해요" as const,
      nickname: "서연",
      selfIntro: "일상 기록러",
      likesCount: 18,
      commentsCount: 5,
      createdAt: "6시간 전",
    },
    {
      id: 4,
      title: "진로에 대해 고민 중",
      content: "졸업이 다가오니까 앞으로 어떤 길을 가야할지 진지하게 고민하게 되네요. 하고 싶은 것도 많고 불안한 것도 많고... 천천히 생각해봐야겠어요.",
      emotion: "생각중이에요" as const,
      nickname: "현우",
      selfIntro: "취준생",
      likesCount: 31,
      commentsCount: 12,
      createdAt: "8시간 전",
    },
    {
      id: 5,
      title: "고향 생각이 나는 날",
      content: "집에서 키우던 강아지가 생각나요. 요즘 바빠서 자주 못 갔는데 이번 주말에는 꼭 다녀와야겠어요. 보고 싶다 뽀삐야!",
      emotion: "그리워요" as const,
      nickname: "지우",
      selfIntro: "타향살이 중",
      likesCount: 27,
      commentsCount: 9,
      createdAt: "10시간 전",
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-accent text-2xl font-bold text-primary" data-testid="text-logo">LinkUs</h1>
          <div className="flex items-center gap-2">
            <Button onClick={() => setLocation('/create')} data-testid="button-create">
              경험 공유하기
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <HeroSection onShareClick={() => setLocation('/create')} />

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="text-feature-1">감정 카드</h3>
              <p className="text-muted-foreground">
                하루의 경험을 감정 태그와 함께 카드로 공유하세요
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="text-feature-2">공감 매칭</h3>
              <p className="text-muted-foreground">
                비슷한 관심사를 가진 사람들과 자연스럽게 연결되세요
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="text-feature-3">익명 피드</h3>
              <p className="text-muted-foreground">
                부담 없이 진솔한 이야기를 나눌 수 있는 공간
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2" data-testid="text-feed-title">지금 공유되는 순간들</h2>
            <p className="text-muted-foreground">실시간으로 업데이트되는 경험 피드</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPosts.map((post) => (
              <ExperienceCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-[hsl(340_65%_70%)]/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-title">
            오늘의 경험을 공유해보세요
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            당신의 하루가 누군가에게는 위로가 되고 공감이 됩니다
          </p>
          <Button 
            size="lg" 
            onClick={() => setLocation('/create')}
            className="rounded-full px-8"
            data-testid="button-cta"
          >
            지금 시작하기
          </Button>
        </div>
      </section>
    </div>
  );
}
