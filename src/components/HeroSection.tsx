import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'phosphor-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 4 }); // Wait for preloader
    
    // Set initial states
    gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)'
    });
    
    gsap.set(splineRef.current, {
      opacity: 0,
      x: 100,
      scale: 0.9
    });

    // Animate elements in sequence
    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: "power2.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .to(splineRef.current, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1");

    // Floating animation for background elements
    gsap.to('.glow-orb', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div ref={splineRef} className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/orb-SaSihVVfENxFsA3jm7Xx8wFN/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0"
        />
      </div>

      {/* Floating Neon Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb absolute top-20 left-20 w-4 h-4 bg-neon-cyan rounded-full opacity-60 animate-float" />
        <div className="glow-orb absolute top-40 right-32 w-6 h-6 bg-neon-purple rounded-full opacity-40 animate-float-delayed" />
        <div className="glow-orb absolute bottom-32 left-40 w-3 h-3 bg-neon-pink rounded-full opacity-70 animate-float" />
        <div className="glow-orb absolute bottom-20 right-20 w-5 h-5 bg-neon-blue rounded-full opacity-50 animate-float-delayed" />
      </div>

      {/* Main Content */}
      <div ref={heroRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent text-glow">
            Milad
          </span>
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl font-light text-muted-foreground">
            Web Developer
          </span>
        </h1>

        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Crafting immersive digital experiences with cutting-edge technology. 
          Specializing in 3D web development, animations, and futuristic user interfaces.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            ref={ctaRef}
            className="btn-neon"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </button>
          
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-glass-border glass rounded-lg font-medium transition-all duration-300 hover:border-primary hover:glow-primary"
          >
            View My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-muted-foreground hover:text-accent transition-colors duration-300">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;