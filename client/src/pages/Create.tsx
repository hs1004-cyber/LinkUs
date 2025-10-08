import { CreateExperienceForm } from "@/components/CreateExperienceForm";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Create() {
  const [, setLocation] = useLocation();

  const handleSubmit = (data: any) => {
    console.log('Experience submitted:', data);
    // TODO: Send to API
    setLocation('/');
  };

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
            <h1 className="font-accent text-2xl font-bold text-primary" data-testid="text-logo">LinkUs</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="py-12 px-4">
        <CreateExperienceForm
          onSubmit={handleSubmit}
          onCancel={() => setLocation('/')}
        />
      </main>
    </div>
  );
}
