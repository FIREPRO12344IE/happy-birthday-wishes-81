import { Confetti } from "@/components/Confetti";
import { Hero } from "@/components/Hero";
import { WishCards } from "@/components/WishCards";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Confetti />
      <Hero />
      <WishCards />
      <Footer />
    </div>
  );
};

export default Index;
