import { Confetti } from "@/components/Confetti";
import { Hero } from "@/components/Hero";
import { WishCards } from "@/components/WishCards";

const Index = () => {
  return (
    <div className="relative">
      <Confetti />
      <Hero />
      <WishCards />
    </div>
  );
};

export default Index;
