import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Sparkle {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
}

export const SparklesEffect = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const sparkleArray: Sparkle[] = [];
    for (let i = 0; i < 30; i++) {
      sparkleArray.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 1 + Math.random() * 2,
        size: 12 + Math.random() * 12,
      });
    }
    setSparkles(sparkleArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-30">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle-pulse"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          <Star
            className="text-party-yellow fill-party-yellow"
            size={sparkle.size}
          />
        </div>
      ))}
    </div>
  );
};
