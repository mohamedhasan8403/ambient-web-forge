
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { 
      icon: Github, 
      href: "https://github.com", 
      label: "GitHub",
      color: "hover:text-cyber-blue hover:shadow-[0_0_20px_#00f5ff]"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com", 
      label: "LinkedIn",
      color: "hover:text-cyber-purple hover:shadow-[0_0_20px_#8a2be2]"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com", 
      label: "Twitter",
      color: "hover:text-cyber-pink hover:shadow-[0_0_20px_#ff1493]"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com", 
      label: "Instagram",
      color: "hover:text-cyber-green hover:shadow-[0_0_20px_#39ff14]"
    },
    { 
      icon: Youtube, 
      href: "https://youtube.com", 
      label: "YouTube",
      color: "hover:text-red-400 hover:shadow-[0_0_20px_#ff4444]"
    },
    { 
      icon: Mail, 
      href: "mailto:alex.chen@example.com", 
      label: "Email",
      color: "hover:text-yellow-400 hover:shadow-[0_0_20px_#ffff44]"
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col space-y-4"
      >
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            whileHover={{ scale: 1.2, x: -10 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 bg-cyber-dark/80 backdrop-blur-sm border border-cyber-blue/30 rounded-full text-muted-foreground transition-all duration-300 ${social.color}`}
            aria-label={social.label}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialLinks;
