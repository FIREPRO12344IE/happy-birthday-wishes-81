import { useEffect, useState } from "react";
import cakeImage from "@/assets/birthday-cake.jpg";
import { Gift, Cake, PartyPopper } from "lucide-react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background px-4 py-20">
      {/* Floating icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Gift className="w-12 h-12 text-party-coral opacity-60" />
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: "1s" }}>
        <PartyPopper className="w-16 h-16 text-party-turquoise opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "2s" }}>
        <Cake className="w-14 h-14 text-party-yellow opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-7xl md:text-9xl font-display mb-6 animate-bounce-in">
            <span className="text-party-coral">Happy</span>{" "}
            <span className="text-party-turquoise">Birth</span>
            <span className="text-party-yellow">day!</span>
          </h1>
          
          <p className="text-2xl md:text-4xl font-body font-light mb-12 text-foreground/80 animate-fade-in">
            Wishing you the most amazing day filled with joy & laughter! 🎉
          </p>

          <div
            className={`relative rounded-3xl overflow-hidden shadow-2xl max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <img
              src={cakeImage}
              alt="Beautiful birthday cake with candles"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-card border-2 border-primary rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
              <Gift className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-display text-xl text-party-coral">Make a Wish!</p>
            </div>
            <div className="bg-card border-2 border-secondary rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
              <Cake className="w-8 h-8 text-secondary mx-auto mb-2" />
              <p className="font-display text-xl text-party-turquoise">Blow the Candles!</p>
            </div>
            <div className="bg-card border-2 border-accent rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
              <PartyPopper className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-display text-xl text-party-yellow">Celebrate!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
