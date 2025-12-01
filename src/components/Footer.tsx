import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-muted to-background py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-party-coral animate-pulse" />
          <p className="text-lg font-body text-foreground/80">
            Made with love by <span className="font-display text-party-coral text-xl">Edwin</span>
          </p>
          <Heart className="w-5 h-5 text-party-coral animate-pulse" />
        </div>
        <p className="text-sm text-muted-foreground">
          Here's to many more amazing years ahead! 🎉
        </p>
      </div>
    </footer>
  );
};
