import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PaperPlaneTilt, GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section animation
      gsap.fromTo('.contact-header',
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Form elements stagger
      gsap.fromTo('.form-element',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Social icons animation
      gsap.fromTo('.social-icon',
        { opacity: 0, scale: 0, rotation: 180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.social-icons',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Animate submit success
    gsap.to('.submit-btn', {
      scale: 1.1,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="contact-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent text-glow">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Drop me a message 
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="form-element">
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 glass border border-glass-border rounded-lg bg-transparent text-foreground placeholder-muted-foreground focus:border-primary focus:glow-primary focus:outline-none transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div className="form-element">
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 glass border border-glass-border rounded-lg bg-transparent text-foreground placeholder-muted-foreground focus:border-primary focus:glow-primary focus:outline-none transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-element">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 glass border border-glass-border rounded-lg bg-transparent text-foreground placeholder-muted-foreground focus:border-primary focus:glow-primary focus:outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn form-element w-full btn-neon flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="spinner" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <PaperPlaneTilt size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="form-element glass p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always excited to work on new projects and collaborate with 
                talented individuals. Whether you need a complete website, 
                interactive animations, or just want to discuss ideas, I'm here to help.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Available for freelance projects
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Response within 24 hours
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Based in San Francisco, CA
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="form-element">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Connect With Me
              </h3>
              <div className="social-icons flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:glow-accent transition-all duration-300 hover:-translate-y-2"
                >
                  <GithubLogo size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:glow-accent transition-all duration-300 hover:-translate-y-2"
                >
                  <LinkedinLogo size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:glow-accent transition-all duration-300 hover:-translate-y-2"
                >
                  <TwitterLogo size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;