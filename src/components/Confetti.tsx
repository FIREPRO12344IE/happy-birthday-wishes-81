import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  shape: 'circle' | 'square' | 'star';
  size: number;
}

const colors = [
  "bg-party-coral",
  "bg-party-yellow",
  "bg-party-turquoise",
  "bg-party-purple",
  "bg-primary",
  "bg-secondary",
];

const shapes = ['circle', 'square', 'star'] as const;

export const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const pieces: ConfettiPiece[] = [];
    // More confetti pieces!
    for (let i = 0; i < 100; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 4 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        size: 8 + Math.random() * 12,
      });
    }
    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className={`absolute ${piece.color} animate-confetti ${
            piece.shape === 'circle' ? 'rounded-full' : piece.shape === 'square' ? '' : ''
          }`}
          style={{
            left: `${piece.left}%`,
            width: piece.shape === 'star' ? 'auto' : `${piece.size}px`,
            height: piece.shape === 'star' ? 'auto' : `${piece.size}px`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        >
          {piece.shape === 'star' && (
            <Sparkles className="w-4 h-4" />
          )}
        </div>
      ))}
    </div>
  );
};
