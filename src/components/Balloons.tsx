import { useEffect, useState } from "react";

interface Balloon {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

const balloonColors = [
  "bg-party-coral",
  "bg-party-yellow",
  "bg-party-turquoise",
  "bg-party-purple",
  "bg-primary",
  "bg-secondary",
];

export const Balloons = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const balloonArray: Balloon[] = [];
    for (let i = 0; i < 15; i++) {
      balloonArray.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
        size: 40 + Math.random() * 30,
      });
    }
    setBalloons(balloonArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute bottom-0 animate-balloon-float"
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
          }}
        >
          <div className="relative">
            {/* Balloon */}
            <div
              className={`${balloon.color} rounded-full shadow-lg`}
              style={{
                width: `${balloon.size}px`,
                height: `${balloon.size * 1.2}px`,
              }}
            />
            {/* String */}
            <div
              className="absolute left-1/2 top-full w-0.5 bg-foreground/30"
              style={{ height: `${balloon.size * 0.8}px` }}
            />
            {/* Shine effect */}
            <div
              className="absolute top-2 left-2 bg-white/40 rounded-full"
              style={{
                width: `${balloon.size * 0.3}px`,
                height: `${balloon.size * 0.3}px`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
