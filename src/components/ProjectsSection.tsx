
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      description: "Full-stack e-commerce solution with AI-powered recommendations, real-time analytics, and modern payment processing.",
      tech: ["React", "Node.js", "PostgreSQL", "TensorFlow", "Stripe"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      title: "Real-Time Collaboration Tool",
      description: "Multi-user collaborative workspace with real-time editing, video calls, and project management features.",
      tech: ["React", "Socket.io", "MongoDB", "WebRTC", "Docker"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      title: "Blockchain Analytics Dashboard",
      description: "Comprehensive analytics platform for cryptocurrency trading with advanced charting and portfolio tracking.",
      tech: ["Vue.js", "Python", "Redis", "Chart.js", "Web3.js"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      title: "IoT Smart Home System",
      description: "Complete IoT ecosystem for smart home automation with mobile app, voice control, and energy monitoring.",
      tech: ["React Native", "Arduino", "MQTT", "Firebase", "TensorFlow Lite"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://demo.com"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-pink mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my most impactful work, from AI-powered applications to blockchain solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cyber-card overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-cyber-dark/80 rounded-full text-cyber-blue hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-cyber-dark/80 rounded-full text-cyber-blue hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-cyber-blue mb-3 group-hover:glow-text transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
