import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Globe } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.fromTo('.projects-header',
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
      gsap.fromTo('.project-card',
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

  const projects = [
    {
      id: 1,
      title: "3D Gaming UI",
      description: "Next-generation gaming interface with immersive 3D elements and smooth animations",
      image: "/lovable-uploads/f9f27570-be2c-4a38-9632-bb31abfb52cb.png",
      tech: ["React", "Three.js", "GSAP"],
      category: "Gaming"
    },
    {
      id: 2,
      title: "3D Portfolio",
      description: "Interactive portfolio showcasing 3D web development capabilities",
      image: "/lovable-uploads/dfc71b1d-876b-44b8-9050-0fb2a6a429fd.png",
      tech: ["Spline", "React", "Tailwind"],
      category: "Portfolio"
    },
    {
      id: 3,
      title: "Gaming Website",
      description: "Dynamic gaming platform with character animations and interactive elements",
      image: "/lovable-uploads/7c4f57e3-9a5b-451e-8a2f-6915ce2e6553.png",
      tech: ["JavaScript", "CSS3", "WebGL"],
      category: "Gaming"
    },
    {
      id: 4,
      title: "Animation Tools",
      description: "Comprehensive web animation platform with advanced GSAP integrations",
      image: "/lovable-uploads/4f8001cb-9a58-4593-b275-794b1a910f62.png",
      tech: ["GSAP", "Vue.js", "Node.js"],
      category: "Tools"
    },
    {
      id: 5,
      title: "Portfolio Tutorial",
      description: "Step-by-step animated portfolio creation with modern design principles",
      image: "/lovable-uploads/89bd1b8c-69c5-4c73-a231-ad3eb156a565.png",
      tech: ["React", "GSAP", "CSS"],
      category: "Education"
    },
    {
      id: 6,
      title: "3D Interactive Web",
      description: "Cutting-edge 3D web experience with real-time interactions",
      image: "/lovable-uploads/689fe18e-1d26-4792-849b-3c8126d54344.png",
      tech: ["Three.js", "React", "WebGL"],
      category: "Interactive"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="projects-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent text-glow">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing innovative web technologies and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card glass rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:glow-primary hover:-translate-y-4"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent hover:glow-accent transition-all duration-300">
                      <Globe size={20} />
                    </button>
                    <button className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent hover:glow-accent transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-glow transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs text-accent font-medium px-2 py-1 bg-accent/10 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-3 py-1 glass-border border rounded-full text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button className="w-full py-2 text-sm glass border border-glass-border rounded-lg hover:border-primary hover:glow-primary transition-all duration-300 group-hover:bg-primary/10">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-neon">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;