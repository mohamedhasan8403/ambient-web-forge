
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-cyber-blue glow-text">
              Passionate Developer & Tech Innovator
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full-stack developer with a passion for creating stunning digital experiences. 
              With expertise in modern web technologies, I transform ideas into reality through 
              clean code and innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with curiosity and evolved into a commitment to excellence. 
              I specialize in React, Node.js, Python, and cloud technologies, always staying ahead 
              of the curve in this rapidly evolving field.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-cyber-purple">Key Achievements:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyber-blue rounded-full mr-3"></span>
                  Led development of 10+ enterprise applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyber-purple rounded-full mr-3"></span>
                  Optimized app performance by 60% using advanced techniques
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyber-pink rounded-full mr-3"></span>
                  Mentored 15+ junior developers in modern practices
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="cyber-card text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyber-blue glow-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
