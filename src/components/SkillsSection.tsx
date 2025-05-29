
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React/Next.js", level: 95, color: "from-cyber-blue to-cyan-400" },
    { name: "Node.js/Express", level: 90, color: "from-cyber-green to-green-400" },
    { name: "Python/Django", level: 88, color: "from-cyber-purple to-purple-400" },
    { name: "TypeScript", level: 92, color: "from-cyber-pink to-pink-400" },
    { name: "PostgreSQL/MongoDB", level: 85, color: "from-orange-400 to-red-400" },
    { name: "AWS/Docker", level: 80, color: "from-yellow-400 to-orange-400" },
    { name: "GraphQL/REST APIs", level: 87, color: "from-indigo-400 to-blue-400" },
    { name: "Machine Learning", level: 75, color: "from-pink-400 to-purple-400" }
  ];

  const tools = [
    "React", "Vue.js", "Angular", "Node.js", "Python", "TypeScript", 
    "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS",
    "GraphQL", "REST", "WebSockets", "TensorFlow", "PyTorch", "Git"
  ];

  return (
    <section id="skills" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-cyber-blue mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-cyber-blue">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-cyber-purple mb-8">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border border-cyber-blue/30 rounded-full text-sm font-medium text-cyber-blue hover:border-cyber-blue hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300 cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="cyber-card mt-8"
            >
              <h4 className="text-xl font-bold text-cyber-pink mb-4">Specializations</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyber-blue rounded-full mr-3"></span>
                  Full-Stack Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyber-purple rounded-full mr-3"></span>
                  AI/ML Integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyber-pink rounded-full mr-3"></span>
                  Cloud Architecture & DevOps
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyber-green rounded-full mr-3"></span>
                  Performance Optimization
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
