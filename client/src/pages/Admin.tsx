import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { EmotionTag, type EmotionType } from "@/components/EmotionTag";
import { Heart, MessageCircle, Trash2, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Admin() {
  const [, setLocation] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //todo: remove mock functionality
  const mockAdminPosts = [
    {
      id: 1,
      title: "오늘 처음 가본 카페",
      content: "동네에 새로 생긴 카페에 갔는데 분위기가 너무 좋았어요.",
      emotion: "행복해요" as EmotionType,
      nickname: "민지",
      likesCount: 12,
      commentsCount: 3,
      createdAt: "2024-10-08 14:30",
    },
    {
      id: 2,
      title: "대학 과제 완성!",
      content: "밤새 고생했던 프로젝트를 드디어 완성했어요.",
      emotion: "신나요" as EmotionType,
      nickname: "준호",
      likesCount: 24,
      commentsCount: 7,
      createdAt: "2024-10-08 12:15",
    },
    {
      id: 3,
      title: "저녁 산책하면서",
      content: "요즘 날씨가 딱 좋아서 매일 저녁에 산책을 나가요.",
      emotion: "평온해요" as EmotionType,
      nickname: "서연",
      likesCount: 18,
      commentsCount: 5,
      createdAt: "2024-10-08 10:45",
    },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "123456") {
      setIsAuthenticated(true);
      console.log('Admin logged in');
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const handleDelete = (id: number) => {
    console.log(`Delete post ${id}`);
    // TODO: Implement delete functionality
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md p-8">
          <h1 className="text-2xl font-bold mb-6 text-center" data-testid="text-login-title">관리자 로그인</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                data-testid="input-username"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                data-testid="input-password"
              />
            </div>
            <Button type="submit" className="w-full" data-testid="button-login">
              로그인
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLocation('/')}
              data-testid="button-back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-accent text-2xl font-bold text-primary" data-testid="text-logo">LinkUs Admin</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setIsAuthenticated(false)} data-testid="button-logout">
              로그아웃
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2" data-testid="text-dashboard-title">게시물 관리</h2>
            <p className="text-muted-foreground">등록된 경험 카드 목록 (최신순)</p>
          </div>

          <div className="grid gap-4">
            {mockAdminPosts.map((post) => (
              <Card key={post.id} className="p-6" data-testid={`card-admin-post-${post.id}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <EmotionTag emotion={post.emotion} />
                      <span className="text-sm text-muted-foreground" data-testid={`text-admin-time-${post.id}`}>
                        {post.createdAt}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2" data-testid={`text-admin-title-${post.id}`}>
                      {post.title}
                    </h3>
                    <p className="text-foreground mb-4" data-testid={`text-admin-content-${post.id}`}>
                      {post.content}
                    </p>

                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground" data-testid={`text-admin-nickname-${post.id}`}>
                        작성자: {post.nickname}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Heart className="h-4 w-4" />
                        <span data-testid={`text-admin-likes-${post.id}`}>{post.likesCount}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MessageCircle className="h-4 w-4" />
                        <span data-testid={`text-admin-comments-${post.id}`}>{post.commentsCount}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(post.id)}
                    data-testid={`button-delete-${post.id}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
