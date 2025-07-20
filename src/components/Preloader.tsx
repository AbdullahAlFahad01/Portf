import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set([logoRef.current, progressBarRef.current], { opacity: 0, y: 50 });
    
    // Animate in
    tl.to([logoRef.current, progressBarRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    })
    // Progress bar animation
    .to(progressBarRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
      onUpdate: () => {
        const progress = Math.round(gsap.getProperty(progressBarRef.current, "width") as number / 4); // Approximate percentage
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.min(progress, 100)}%`;
        }
      }
    })
    // Final counter animation
    .to({}, {
      duration: 0.5,
      onUpdate: function() {
        if (counterRef.current) {
          const progress = Math.round(this.progress() * 100);
          counterRef.current.textContent = `${Math.min(100, progress + 95)}%`;
        }
      }
    })
    // Exit animation
    .to([logoRef.current, progressBarRef.current], {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power2.inOut"
    })
    .to(preloaderRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
      }
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div ref={logoRef} className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-glow">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Milad
            </span>
          </h1>
          <p className="text-xl text-muted-foreground font-light tracking-wider">
            Creative Developer
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto space-y-4">
          <div className="relative h-1 bg-muted/20 rounded-full overflow-hidden glass">
            <div 
              ref={progressBarRef}
              className="absolute left-0 top-0 h-full w-0 bg-gradient-primary rounded-full glow-primary"
            />
          </div>
          
          {/* Progress Counter */}
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Loading Experience</span>
            <span ref={counterRef}>0%</span>
          </div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full animate-float opacity-60" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-neon-purple rounded-full animate-float-delayed opacity-40" />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-neon-pink rounded-full animate-float opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;