import { useState, useEffect } from 'react';
import { List, X, GithubLogo, LinkedinLogo } from 'phosphor-react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate navigation on mount
    gsap.fromTo('.nav-item', 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 3.5 }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      gsap.fromTo('.mobile-menu',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo('.mobile-nav-item',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, delay: 0.1 }
      );
    }
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-xl' : ''
      }`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="nav-item">
            <a href="#home" className="text-2xl font-bold text-glow">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                MC
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-item text-foreground/80 hover:text-foreground transition-colors duration-300 hover:text-glow"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="nav-item text-foreground/60 hover:text-accent transition-colors duration-300">
              <GithubLogo size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="nav-item text-foreground/60 hover:text-accent transition-colors duration-300">
              <LinkedinLogo size={20} />
            </a>
            <button className="nav-item btn-neon">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden nav-item text-foreground transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu fixed inset-0 z-50 glass backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="mobile-nav-item text-2xl font-light text-foreground hover:text-glow transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            
            <div className="mobile-nav-item flex items-center space-x-6 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="text-foreground/60 hover:text-accent transition-colors duration-300">
                <GithubLogo size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-foreground/60 hover:text-accent transition-colors duration-300">
                <LinkedinLogo size={24} />
              </a>
            </div>
            
            <button 
              className="mobile-nav-item btn-neon"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;