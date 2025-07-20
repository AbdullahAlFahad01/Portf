import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, filter: 'blur(10px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Profile image animation
      gsap.fromTo(profileRef.current,
        { opacity: 0, x: -100, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: profileRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Skills stagger animation
      gsap.fromTo('.skill-icon',
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'GSAP', icon: '🎬' },
    { name: 'Three.js', icon: '🎯' },
    { name: 'Node.js', icon: '🚀' },
    { name: 'TypeScript', icon: '📘' }
  ];

  return (
    <section id="about" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={profileRef} className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden glass p-4 glow-primary">
                <img 
                  src="/lovable-uploads/3cf7c37d-010e-47f2-a347-76f99d6eb6c2.png"
                  alt="Milad - Creative Developer"
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-cyan rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full animate-float" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent text-glow">
                  Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-6" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Hi there! I'm <span className="text-foreground font-medium">Milad</span>, 
                a passionate web developer specializing in creating immersive digital experiences 
                that push the boundaries of what's possible on the web.
              </p>
              
              <p>
                With expertise in cutting-edge technologies like <span className="text-accent">GSAP</span>, 
                <span className="text-accent"> Three.js</span>, and modern JavaScript frameworks, 
                I craft websites that don't just look amazing—they tell stories, engage users, 
                and deliver unforgettable experiences.
              </p>

              <p>
                I believe in clean code, clear communication, and getting things done on time, 
                every time. Whether it's a portfolio, e-commerce site, or complex web application, 
                I'm committed to delivering production-ready solutions that exceed expectations.
              </p>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef}>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Tech Stack</h3>
              <div className="grid grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="skill-icon glass p-4 rounded-lg text-center transition-all duration-300 hover:glow-accent hover:-translate-y-2 group"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;