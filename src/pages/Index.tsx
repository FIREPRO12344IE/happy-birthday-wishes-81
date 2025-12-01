import { Confetti } from "@/components/Confetti";
import { Balloons } from "@/components/Balloons";
import { SparklesEffect } from "@/components/Sparkles";
import { Hero } from "@/components/Hero";
import { WishCards } from "@/components/WishCards";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Confetti />
      <Balloons />
      <SparklesEffect />
      <Hero />
      <WishCards />
      <Footer />
    </div>
  );
};

export default Index;
