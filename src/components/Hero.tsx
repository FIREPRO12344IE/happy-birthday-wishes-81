import { useEffect, useState, useRef } from "react";
import cakeImage from "@/assets/birthday-cake.jpg";
import chynaAsset from "@/assets/chyna.png.asset.json";
import { Gift, Cake, PartyPopper, Music, Volume2, Play } from "lucide-react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsVisible(true);
    audioRef.current = new Audio('/happybirthday.mp3');
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const startExperience = async () => {
    setShowOverlay(false);
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Audio play failed:', error);
      }
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Click-to-start overlay (required by browsers for audio)
  if (showOverlay) {
    return (
      <div 
        className="fixed inset-0 z-[100] bg-gradient-to-br from-party-purple via-party-coral to-party-turquoise flex items-center justify-center cursor-pointer"
        onClick={startExperience}
      >
        <div className="text-center animate-bounce-in">
          <h1 className="text-5xl md:text-7xl font-display text-white mb-6 drop-shadow-lg">
            Chyna's 17th Birthday! 🎂
          </h1>
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 inline-block mb-6 animate-pulse">
            <Play className="w-16 h-16 text-white" />
          </div>
          <p className="text-2xl md:text-3xl font-body text-white/90">
            Tap anywhere to start the celebration! 🎉
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background px-4 py-20">
      {/* Music Control */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce-in"
        aria-label="Toggle music"
      >
        {isPlaying ? <Volume2 className="w-6 h-6" /> : <Music className="w-6 h-6" />}
      </button>

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
      <div className="absolute top-1/4 right-32 animate-float" style={{ animationDelay: "0.5s" }}>
        <Gift className="w-10 h-10 text-party-purple opacity-50" />
      </div>
      <div className="absolute bottom-1/4 left-32 animate-float" style={{ animationDelay: "1.5s" }}>
        <PartyPopper className="w-12 h-12 text-party-yellow opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-7xl md:text-9xl font-display mb-6 animate-bounce-in">
            <span className="text-party-coral">Happy</span>{" "}
            <span className="text-party-turquoise">17th</span>{" "}
            <span className="text-party-yellow">Birthday!</span>
          </h1>
          
          <h2 className="text-5xl md:text-6xl font-display mb-8 text-party-purple animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Chyna! 🎊
          </h2>
          
          <p className="text-2xl md:text-3xl font-body font-light mb-12 text-foreground/80 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Seventeen and shining! Wishing you the most amazing year ahead filled with joy, success & endless laughter! 🎉
          </p>

          {/* Chyna's Photo */}
          <div
            className={`relative rounded-full overflow-hidden shadow-2xl max-w-xs mx-auto mb-12 border-8 border-primary animate-glow-pulse transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <img
              src={chynaAsset.url}
              alt="Chyna's photo"
              className="w-full h-auto"
            />
            {/* Sparkle overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-2 right-8 animate-pulse">
                <div className="w-3 h-3 bg-party-yellow rounded-full"></div>
              </div>
              <div className="absolute bottom-8 left-4 animate-pulse" style={{ animationDelay: "0.5s" }}>
                <div className="w-2 h-2 bg-party-turquoise rounded-full"></div>
              </div>
              <div className="absolute top-1/2 right-4 animate-pulse" style={{ animationDelay: "1s" }}>
                <div className="w-2 h-2 bg-party-coral rounded-full"></div>
              </div>
            </div>
          </div>

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

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in mb-12" style={{ animationDelay: "0.8s" }}>
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

          {/* Birthday Cake Image */}
          <div
            className={`relative rounded-3xl overflow-hidden shadow-2xl max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <img
              src={cakeImage}
              alt="Beautiful birthday cake with candles"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
