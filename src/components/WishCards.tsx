import { Heart, Sparkles, Star, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";

const wishes = [
  {
    icon: Heart,
    color: "text-party-coral",
    bgColor: "bg-party-coral/10",
    title: "Love & Joy",
    message: "May your day be filled with endless love and pure happiness!",
  },
  {
    icon: Sparkles,
    color: "text-party-turquoise",
    bgColor: "bg-party-turquoise/10",
    title: "Dreams Come True",
    message: "May all your wishes and dreams come true this year!",
  },
  {
    icon: Star,
    color: "text-party-yellow",
    bgColor: "bg-party-yellow/10",
    title: "Shine Bright",
    message: "Keep shining like the star you are, today and always!",
  },
  {
    icon: Sun,
    color: "text-party-purple",
    bgColor: "bg-party-purple/10",
    title: "Bright Future",
    message: "Here's to another year of amazing adventures ahead!",
  },
];

export const WishCards = () => {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-display text-center mb-16 text-party-coral">
          Birthday Wishes 🎁
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {wishes.map((wish, index) => (
            <Card
              key={index}
              className={`${wish.bgColor} border-2 border-border p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`${wish.color} p-3 rounded-full bg-background/50`}>
                  <wish.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className={`text-2xl font-display mb-3 ${wish.color}`}>
                    {wish.title}
                  </h3>
                  <p className="text-lg text-foreground/80 font-body">
                    {wish.message}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-3xl md:text-4xl font-display text-party-purple mb-4">
            Celebrate like there's no tomorrow! 🎊
          </p>
          <p className="text-xl text-muted-foreground font-body">
            You deserve all the happiness in the world!
          </p>
        </div>
      </div>
    </section>
  );
};
