import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Medal, CalendarCheck } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.fromTo('.certifications-header',
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

      // Cards stagger animation
      gsap.fromTo('.certification-card',
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const certifications = [
    {
      id: 1,
      title: "React Developer Certification",
      description: "Advanced React development with hooks, context, and modern patterns",
      image: "/lovable-uploads/f9f27570-be2c-4a38-9632-bb31abfb52cb.png",
      issuer: "Meta",
      date: "2024",
      skills: ["React", "Hooks", "JSX"]
    },
    {
      id: 2,
      title: "Three.js 3D Development",
      description: "Professional 3D web development and WebGL programming",
      image: "/lovable-uploads/dfc71b1d-876b-44b8-9050-0fb2a6a429fd.png",
      issuer: "Udemy",
      date: "2023",
      skills: ["Three.js", "WebGL", "3D"]
    },
    {
      id: 3,
      title: "GSAP Animation Expert",
      description: "Master-level animations and interactive web experiences",
      image: "/lovable-uploads/7c4f57e3-9a5b-451e-8a2f-6915ce2e6553.png",
      issuer: "GreenSock",
      date: "2024",
      skills: ["GSAP", "Animation", "ScrollTrigger"]
    },
    {
      id: 4,
      title: "Full Stack Web Developer",
      description: "Complete web development stack with modern technologies",
      image: "/lovable-uploads/4f8001cb-9a58-4593-b275-794b1a910f62.png",
      issuer: "freeCodeCamp",
      date: "2023",
      skills: ["Node.js", "React", "MongoDB"]
    },
    {
      id: 5,
      title: "JavaScript ES6+ Mastery",
      description: "Advanced JavaScript programming and modern ES features",
      image: "/lovable-uploads/89bd1b8c-69c5-4c73-a231-ad3eb156a565.png",
      issuer: "JavaScript Institute",
      date: "2023",
      skills: ["JavaScript", "ES6+", "DOM"]
    },
    {
      id: 6,
      title: "UI/UX Design Principles",
      description: "Professional design thinking and user experience optimization",
      image: "/lovable-uploads/689fe18e-1d26-4792-849b-3c8126d54344.png",
      issuer: "Adobe",
      date: "2024",
      skills: ["Figma", "Design", "UX"]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="certifications-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent text-glow">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Validated expertise through industry-recognized certifications and continuous learning
          </p>
        </div>

        {/* Certifications Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="certification-card glass rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:glow-primary hover:-translate-y-4"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent hover:glow-accent transition-all duration-300">
                      <Medal size={20} />
                    </button>
                    <button className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent hover:glow-accent transition-all duration-300">
                      <CalendarCheck size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-glow transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs text-accent font-medium px-2 py-1 bg-accent/10 rounded-full">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs px-3 py-1 glass-border border rounded-full text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button className="w-full py-2 text-sm glass border border-glass-border rounded-lg hover:border-primary hover:glow-primary transition-all duration-300 group-hover:bg-primary/10">
                    Verify Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-neon">
            View All Certifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;