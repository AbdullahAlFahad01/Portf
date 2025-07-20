import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer fade in with floating particles
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating particles animation
      gsap.to('.particle', {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      });

      gsap.to('.particle', {
        x: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 1.5,
          from: "random"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    { href: 'https://github.com', icon: GithubLogo, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: LinkedinLogo, label: 'LinkedIn' },
    { href: 'https://twitter.com', icon: TwitterLogo, label: 'Twitter' }
  ];

  return (
    <footer ref={footerRef} className="relative py-16 px-6 mt-20 overflow-hidden">
      {/* Floating Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle absolute top-16 left-20 w-1 h-1 bg-neon-cyan rounded-full opacity-60" />
        <div className="particle absolute top-32 right-32 w-2 h-2 bg-neon-purple rounded-full opacity-40" />
        <div className="particle absolute bottom-24 left-40 w-1.5 h-1.5 bg-neon-pink rounded-full opacity-70" />
        <div className="particle absolute bottom-16 right-24 w-1 h-1 bg-neon-blue rounded-full opacity-50" />
        <div className="particle absolute top-20 left-1/2 w-1 h-1 bg-accent rounded-full opacity-80" />
        <div className="particle absolute bottom-32 left-1/4 w-2 h-2 bg-primary rounded-full opacity-30" />
        <div className="particle absolute top-40 right-1/4 w-1.5 h-1.5 bg-neon-cyan rounded-full opacity-60" />
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-glow mb-2">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Milad
                </span>
              </h3>
              <p className="text-muted-foreground">Creative Developer</p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Crafting immersive digital experiences with cutting-edge technology. 
              Passionate about 3D web development, animations, and pushing the 
              boundaries of what's possible on the web.
            </p>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by MiladiCode</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-accent transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:glow-accent transition-all duration-300 hover:-translate-y-2"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>hello@miladicode.com</p>
              <p>San Francisco, CA</p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-sm text-accent hover:text-accent-glow transition-colors duration-300"
            >
              <span>Back to top</span>
              <div className="w-4 h-4 border border-accent rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-accent rounded-full animate-bounce" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 MiladiCode. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;